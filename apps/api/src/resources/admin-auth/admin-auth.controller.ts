import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminAuthService } from './admin-auth.service';
import {
  SignInValidateRequestDto,
  SignInValidateResponseDto,
} from './dto/admin-auth.dto';

@Controller('admin')
@ApiTags('Auth Admin Accounts')
export class AuthController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post('sign-in/validate-admin-account')
  @ApiOperation({
    summary: 'Validate Admin Account for Sign In',
    description:
      'Validates the admin account during sign-in and generates an OTP.',
  })
  @ApiCreatedResponse({
    description: 'Admin account validated successfully.',
    type: SignInValidateResponseDto,
  })
  async signInValidateAdminAccount(
    @Body() request: SignInValidateRequestDto
  ): Promise<SignInValidateResponseDto> {
    return await this.adminAuthService.signInValidateAdminAccount(request);
  }
}
