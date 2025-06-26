import { PartialType, PickType } from '@nestjs/swagger';
import { AdminAccountDto } from './admin-account.dto';

export class CreateAdminAccountRequestDto extends PickType(AdminAccountDto, [
  'name',
  'email',
  'phone',
] as const) {}

export class CreateAdminAccountResponseDto extends PartialType(
  PickType(AdminAccountDto, ['id', 'createdAt'])
) {}
