import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';
import { dateTimeUtils } from 'src/utils/datetime.utils';

export class TenantDto {
  @ApiProperty({
    description: 'Unique identifier for the tenant',
    example: '01JZAJPC284MHAADS8CWCYTSYX',
    type: 'string',
    format: 'uuid',
  })
  @IsString()
  @Length(26, 26)
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Legal identification for the tenant (CPF or CNPJ)',
    examples: {
      cpf: { summary: 'CPF example', value: '12345678909' },
      cnpj: { summary: 'CNPJ example', value: '12345678000190' },
    },
    type: 'string',
  })
  legalIdentification: string;

  @ApiProperty({
    description: 'Legal name of the tenant',
    example: 'Example Company Ltda.',
    type: 'string',
  })
  legalName: string;

  @ApiProperty({
    description: 'Display name of the tenant',
    example: 'Example Company',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-06-24T12:34:56.789Z',
  })
  @Expose()
  @Transform(({ value }: { value: Date }) =>
    dateTimeUtils.toLocalDateTime(value)
  )
  createdAt: string;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-06-24T12:34:56.789Z',
  })
  @Expose()
  @Transform(({ value }: { value: Date }) =>
    dateTimeUtils.toLocalDateTime(value)
  )
  updatedAt: string;

  @ApiProperty({
    description: 'Deletion timestamp',
    example: '2024-06-24T12:34:56.789Z',
    required: false,
  })
  @Expose()
  @Transform(({ value }: { value: Date }) =>
    dateTimeUtils.toLocalDateTime(value)
  )
  deletedAt?: string;
}
