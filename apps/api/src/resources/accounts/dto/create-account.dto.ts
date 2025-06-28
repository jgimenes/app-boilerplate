import { PartialType, PickType } from '@nestjs/swagger';
import { AccountDto } from './account.dto';

export class CreateAccountRequestDto extends PickType(AccountDto, [
  'name',
  'email',
  'phone',
] as const) {}

export class CreateAccountResponseDto extends PartialType(
  PickType(AccountDto, ['id', 'createdAt'])
) {}
