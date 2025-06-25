import { ApiPropertyOptional } from '@nestjs/swagger';

export class MetadataDTO {
  @ApiPropertyOptional({
    description: 'Total number of registered items.',
    example: 132,
  })
  count?: number;

  @ApiPropertyOptional({
    description: 'Total number of items showcased per page.',
    example: 10,
  })
  limit?: number;

  @ApiPropertyOptional({ description: 'Current page number.', example: 1 })
  page?: number;

  @ApiPropertyOptional({
    description: 'Total number of available pages.',
    example: 14,
  })
  pages?: number;

  @ApiPropertyOptional({ description: 'First page number.', example: 1 })
  firstPage?: number;

  @ApiPropertyOptional({ description: 'Last page number.', example: 14 })
  lastPage?: number;

  @ApiPropertyOptional({
    description: 'Previous page number or null if on the first page.',
    example: null,
  })
  previousPage?: number | null;

  @ApiPropertyOptional({
    description: 'Next page number or null if on the last page.',
    example: 2,
  })
  nextPage?: number | null;
}
