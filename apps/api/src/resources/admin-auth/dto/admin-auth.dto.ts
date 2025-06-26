import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AdminAccountDto } from 'src/resources/admin-accounts/dto/admin-account.dto';

export class SignInValidateRequestDto extends PickType(AdminAccountDto, [
  'email',
] as const) {}

export class SignInValidateResponseDto extends PickType(AdminAccountDto, [
  'id',
  'email',
] as const) {}

export class SignInAdminRequestDto extends PickType(AdminAccountDto, [
  'id',
] as const) {
  @ApiProperty({
    description: 'One Time Password (OTP) for admin sign-in',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  otp: string;
}
