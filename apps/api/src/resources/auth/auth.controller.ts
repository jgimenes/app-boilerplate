import { Body, Controller, Delete, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { HttpExceptionDto } from 'src/common/dto/http-exception.dto';
import { AuthService } from './auth.service';
import {
  OtpRequestDto,
  SignInRequestDto,
  SignInResponseDto,
  SignOutRequestDto,
} from './dto/auth.dto';

@Controller('accounts')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in/otp')
  @ApiOperation({
    summary: 'Get OTP for Sign In',
    description: 'Validates the account during sign-in and generates an OTP.',
  })
  @ApiCreatedResponse({
    description: 'Admin account validated successfully.',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access. Invalid email or account not found.',
    type: HttpExceptionDto,
  })
  otpRequest(@Body() request: OtpRequestDto) {
    return this.authService.otpRequest(request);
  }

  @Post('sign-in')
  @ApiOperation({
    summary: 'Sign In Account',
    description: 'Signs in the account using the provided email and OTP.',
  })
  @ApiCreatedResponse({
    description: 'Account signed in successfully.',
    type: SignInResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access. Invalid email or account not found.',
    type: HttpExceptionDto,
  })
  signInAccount(@Body() request: SignInRequestDto): Promise<SignInResponseDto> {
    return this.authService.signIn(request);
  }

  @Delete('sign-out')
  @ApiOperation({
    summary: 'Sign Out Account',
    description: 'Signs out the account using the provided email.',
  })
  @ApiNoContentResponse({
    description: 'Account signed out successfully.',
  })
  signOutAccount(@Body() request: SignOutRequestDto): Promise<void> {
    return this.authService.signOut(request);
  }
}
