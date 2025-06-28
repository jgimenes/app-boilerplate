import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { HttpExceptionDto } from 'src/common/dto/http-exception.dto';
import { AdminAuthService } from './admin-auth.service';
import {
  SignInAdminRequestDto,
  SignInAdminResponseDto,
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
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access. Invalid email or account not found.',
    type: HttpExceptionDto,
  })
  signInValidateAdminAccount(@Body() request: SignInValidateRequestDto) {
    return this.adminAuthService.signInValidateAdminAccount(request);
  }

  @Post('sign-in')
  @ApiOperation({
    summary: 'Sign In Admin Account',
    description: 'Signs in the admin account using the provided email and OTP.',
  })
  @ApiCreatedResponse({
    description: 'Admin account signed in successfully.',
    type: SignInAdminResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access. Invalid email or account not found.',
    type: HttpExceptionDto,
  })
  signInAdminAccount(
    @Body() request: SignInAdminRequestDto
  ): Promise<SignInAdminResponseDto> {
    return this.adminAuthService.signInAdminAccount(request);
  }
}
