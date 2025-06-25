import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInRequestDto {
  @ApiProperty({
    description:
      'The account identifier, can be an id, an email or phone number',
    example: 'user@example.com',
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    description: 'The one-time password (OTP) for authentication',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  otp: string;
}

export class SignInResponseDto {
  token: string;
  refreshToken: string;
}
