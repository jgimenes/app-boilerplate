import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { MetadataDTO } from 'src/common/dto/metadata.dto';

export class AdminAccountDto {
  @ApiProperty({
    description: 'Unique identifier for the admin account',
    example: '01JYHEX3RRFWY61F41PYC39HJM',
    type: String,
    format: 'ulid',
  })
  @IsString()
  @Length(26, 26)
  @Expose()
  id: string;

  @ApiProperty({
    description: 'Name for the admin account',
    example: 'John Doe',
    type: String,
    minLength: 3,
    maxLength: 50,
  })
  @IsString()
  @Length(3, 50)
  @Expose()
  name: string;

  @ApiProperty({
    description: 'Email address of the admin account',
    example: 'sysadmin@email.com',
    type: String,
    format: 'email',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Expose()
  @Transform(({ value }: { value: string }) => value?.toLowerCase().trim())
  email: string;

  @ApiProperty({
    description: 'Mobile phone number of the admin account',
    example: '+5511999999999',
    type: String,
    format: 'mobile phone number',
  })
  @IsString()
  @IsOptional()
  @IsMobilePhone(undefined, { strictMode: false })
  @Expose()
  phone?: string;

  @ApiProperty({
    description: 'One-time password for the admin account',
    example: '123456',
    type: String,
    format: 'otp',
  })
  @IsOptional()
  @Length(6, 6)
  @Expose()
  otp?: string;

  @ApiProperty({
    description: 'Expiration date for the one-time password',
    example: '2024-06-24T12:34:56.789Z',
    type: Date,
    required: false,
  })
  otpExpiresAt?: Date;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-06-24T12:34:56.789Z',
  })
  @Expose()
  createdAt: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-06-24T12:34:56.789Z',
  })
  @Expose()
  updatedAt: Date;

  @ApiProperty({
    description: 'Deletion timestamp',
    example: '2024-06-24T12:34:56.789Z',
    required: false,
  })
  @IsOptional()
  @Expose()
  deletedAt?: Date;
}

export class AdminAccountResponseDto extends PartialType(
  PickType(AdminAccountDto, [
    'id',
    'name',
    'email',
    'phone',
    'createdAt',
    'updatedAt',
    'deletedAt',
  ] as const)
) {}

export class AdminAccountsDto extends PartialType(
  PickType(AdminAccountDto, [
    'id',
    'name',
    'email',
    'phone',
    'createdAt',
  ] as const)
) {}

export class AdminsAccountsResponseDto {
  metadata: MetadataDTO;
  accounts: AdminAccountsDto[];
}
