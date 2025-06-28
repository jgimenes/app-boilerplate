import { PartialType, PickType } from '@nestjs/swagger';
import { AccountDto } from './account.dto';

export class UpdateAccountRequestDto extends PartialType(
  PickType(AccountDto, ['name', 'email', 'phone', 'deletedAt'] as const)
) {}

export class UpdateAccountResponseDto extends PartialType(
  PickType(AccountDto, [
    'name',
    'email',
    'phone',
    'deletedAt',
    'updatedAt',
  ] as const)
) {}
