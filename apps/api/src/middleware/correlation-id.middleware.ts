import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ClsService } from 'nestjs-cls';
import { v4 as uuidv4 } from 'uuid';

interface RequestWithCorrelationId extends Request {
  correlationId: string;
}

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  constructor(private readonly cls: ClsService) {}

  use(req: Request, res: Response, next: NextFunction): void {
    const request = req as RequestWithCorrelationId;

    const incoming = request.headers['x-correlation-id'];
    const correlationId =
      typeof incoming === 'string' && incoming.trim() !== ''
        ? incoming
        : uuidv4();

    // Armazena no CLS context
    this.cls.set('correlationId', correlationId);

    // Armazena na requisição (útil para logs diretos ou rastreio fora do CLS)
    request.correlationId = correlationId;

    res.setHeader('X-Correlation-ID', correlationId);

    next();
  }
}
