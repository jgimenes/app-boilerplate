import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AdminAuthService } from './admin-auth.service';
import {
  SignInAdminRequestDto,
  SignInValidateRequestDto,
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
  })
  async signInValidateAdminAccount(@Body() request: SignInValidateRequestDto) {
    return await this.adminAuthService.signInValidateAdminAccount(request);
  }

  @Post('sign-in')
  @ApiOperation({
    summary: 'Sign In Admin Account',
    description: 'Signs in the admin account using the provided email and OTP.',
  })
  @ApiCreatedResponse({
    description: 'Admin account signed in successfully.',
  })
  async signInAdminAccount(
    @Body() request: SignInAdminRequestDto
  ): Promise<void> {
    await this.adminAuthService.signInAdminAccount(request);
  }
}
