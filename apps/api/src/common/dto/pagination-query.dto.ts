import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Min } from 'class-validator';

export class PaginationQueryDTO {
  @ApiPropertyOptional({ example: 1, description: 'Page number', default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({
    example: 10,
    description: 'Items per page',
    default: 30,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 30;

  @ApiPropertyOptional({
    example: 'name',
    description: 'Field to sort by',
    default: 'name',
  })
  @IsIn(['id', 'name', 'email', 'phone', 'createdAt'], {
    message: 'sortBy must be one of id, name, email, phone, createdAt',
  })
  @IsOptional()
  sortBy?: string = 'name';

  @ApiPropertyOptional({
    example: 'desc',
    description: 'Order direction (asc or desc)',
    default: 'asc',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'], { message: 'orderBy must be asc or desc' })
  orderBy: 'asc' | 'desc' = 'desc';
}
