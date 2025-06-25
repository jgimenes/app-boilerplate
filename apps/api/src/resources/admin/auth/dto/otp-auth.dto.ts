import { PartialType, PickType } from '@nestjs/swagger';
import { AdminAccountDto } from '../../accounts/dto/admin-account.dto';

export class ResendOtpRequestDto extends PartialType(
  PickType(AdminAccountDto, ['id', 'email', 'phone'] as const)
) {}
