import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AccountDto } from '../../accounts/dto/account.dto';

export class OtpRequestDto extends PickType(AccountDto, ['email'] as const) {}

export class SignOnRequestDto extends PickType(AccountDto, [
  'tenantId',
  'name',
  'email',
  'phone',
] as const) {}

export class SignInRequestDto extends PickType(AccountDto, ['email'] as const) {
  @ApiProperty({
    description: 'One Time Password (OTP) for admin sign-in',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  otp: string;
}

export class SignOnResponseDto extends PickType(AccountDto, [
  'id',
  'tenantId',
  'createdAt',
] as const) {}

export class SignInResponseDto {
  @ApiProperty({
    description: 'Token Type',
    example: 'Bearer',
  })
  tokenType: string = 'Bearer';

  @ApiProperty({
    description: 'Access token for admin authentication',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'Refresh token for admin authentication',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  refreshToken: string;

  @ApiProperty({
    description: 'Expiration time of the access token in seconds',
    example: 3600,
  })
  expireIn: number = 3600;

  @ApiProperty({
    description: 'Expiration time of the access token in seconds',
    example: 3600,
  })
  expiresAt: number;
}
