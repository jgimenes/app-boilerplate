import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, Length } from 'class-validator';

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
      cpf: { summary: 'CPF example', value: '123.456.789-09' },
      cnpj: { summary: 'CNPJ example', value: '12.345.678/0001-90' },
    },
    type: 'string',
  })
  legalIdentification: string;
  legalName: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
