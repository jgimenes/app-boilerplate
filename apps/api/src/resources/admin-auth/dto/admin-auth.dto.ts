import { PickType } from '@nestjs/swagger';
import { AdminAccountDto } from 'src/resources/admin-accounts/dto/admin-account.dto';

export class SignInValidateRequestDto extends PickType(AdminAccountDto, [
  'email',
] as const) {}

export class SignInValidateResponseDto extends PickType(AdminAccountDto, [
  'id',
  'email',
] as const) {}
