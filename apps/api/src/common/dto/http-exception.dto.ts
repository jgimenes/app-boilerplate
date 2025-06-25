import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsISO8601, IsString } from 'class-validator';

export class HttpExceptionDto {
  @ApiProperty({
    example: '01JZ0XYZ1ABCD2345EFGH6789J',
    description: 'Correlation ID for tracing',
  })
  @IsString()
  correlationId: string;

  @ApiProperty({ example: 400, description: 'HTTP status code' })
  @IsInt()
  statusCode: number;

  @ApiProperty({
    example: 'Internal server error',
    description: 'Error message to client',
  })
  @IsString()
  message: string;

  @ApiProperty({ example: 'GET', description: 'HTTP method' })
  @IsString()
  method: string;

  @ApiProperty({ example: '/api/accounts', description: 'Request URL path' })
  @IsString()
  path: string;

  @ApiProperty({
    example: '2025-06-24T20:03:10.617Z',
    description: 'Timestamp of the error',
  })
  @IsISO8601()
  timestamp: string;
}
