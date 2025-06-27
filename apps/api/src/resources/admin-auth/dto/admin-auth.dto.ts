import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AdminAccountDto } from 'src/resources/admin-accounts/dto/admin-account.dto';

export class SignInValidateRequestDto extends PickType(AdminAccountDto, [
  'email',
] as const) {}

export class SignInAdminRequestDto extends PickType(AdminAccountDto, [
  'email',
] as const) {
  @ApiProperty({
    description: 'One Time Password (OTP) for admin sign-in',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  otp: string;
}

export class SignInAdminResponseDto {
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
}
