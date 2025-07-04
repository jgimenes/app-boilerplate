import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ClsService } from 'nestjs-cls';
import { HttpExceptionDto } from '../common/dto/http-exception.dto';

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionsFilter.name);

  constructor(private readonly cls: ClsService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const rawCorrelationId: string | undefined = this.cls.get('correlationId');
    const correlationId =
      typeof rawCorrelationId === 'string' ? rawCorrelationId : 'N/A';

    const status = (
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR
    ) as HttpStatus;

    let realMessage: string;
    let stack: string | undefined;

    if (exception instanceof HttpException || exception instanceof Error) {
      realMessage = exception.message;
      stack = exception.stack;
    } else {
      realMessage = 'Unknown error';
      stack = undefined;
    }

    const clientMessage =
      status === HttpStatus.INTERNAL_SERVER_ERROR
        ? 'Internal server error'
        : realMessage;

    const errorResponse: HttpExceptionDto = {
      correlationId,
      statusCode: status,
      message: clientMessage,
      method: request.method,
      path: request.url,
      timestamp: new Date().toISOString(),
    };

    // Log apenas para status 500
    if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `[${correlationId}] [${request.method}] ${request.url} - Status: ${status} - Message: ${realMessage}`,
        stack,
        HttpExceptionsFilter.name
      );
    }

    response.status(status).json(errorResponse);
  }
}
