import { PartialType, PickType } from '@nestjs/swagger';
import { AdminAccountDto } from './admin-account.dto';

export class UpdateAdminAccountRequestDto extends PartialType(
  PickType(AdminAccountDto, ['name', 'email', 'phone', 'deletedAt'] as const)
) {}

export class UpdateAdminAccountResponseDto extends PartialType(
  PickType(AdminAccountDto, [
    'name',
    'email',
    'phone',
    'deletedAt',
    'updatedAt',
  ] as const)
) {}
