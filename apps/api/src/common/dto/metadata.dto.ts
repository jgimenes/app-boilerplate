import { ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MetadataDto {
  @ApiPropertyOptional({
    description: 'Total number of registered items.',
    example: 132,
  })
  @Expose()
  count?: number;

  @ApiPropertyOptional({
    description: 'Total number of items showcased per page.',
    example: 10,
  })
  @Expose()
  limit?: number;

  @ApiPropertyOptional({ description: 'Current page number.', example: 1 })
  page?: number;

  @ApiPropertyOptional({
    description: 'Total number of available pages.',
    example: 14,
  })
  @Expose()
  pages?: number;

  @ApiPropertyOptional({ description: 'First page number.', example: 1 })
  @Expose()
  firstPage?: number;

  @ApiPropertyOptional({ description: 'Last page number.', example: 14 })
  @Expose()
  lastPage?: number;

  @ApiPropertyOptional({
    description: 'Previous page number or null if on the first page.',
    example: null,
  })
  @Expose()
  previousPage?: number | null;

  @ApiPropertyOptional({
    description: 'Next page number or null if on the last page.',
    example: 2,
  })
  @Expose()
  nextPage?: number | null;
}
