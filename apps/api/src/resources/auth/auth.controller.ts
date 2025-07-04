import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { HttpExceptionDto } from 'src/common/dto/http-exception.dto';
import { AuthService } from './auth.service';
import {
  AccessTokenResponseDto,
  OtpRequestDto,
  SignInRequestDto,
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
  @ApiUnprocessableEntityResponse({
    description: 'Invalid input data.',
    type: HttpExceptionDto,
  })
  otpRequest(@Body() request: OtpRequestDto) {
    return this.authService.otpRequest(request);
  }

  @Post('sign-in/resend-otp')
  @ApiOperation({
    summary: 'Resend OTP for Sign In',
    description: 'Resend the OTP for the account during sign-in.',
  })
  @ApiCreatedResponse({
    description: 'OTP resent successfully.',
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid input data.',
    type: HttpExceptionDto,
  })
  otpResend(@Body() request: OtpRequestDto) {
    return this.authService.otpRequest(request);
  }

  @Post('sign-in')
  @ApiOperation({
    summary: 'Sign In Account',
    description: 'Signs in the account using the provided email and OTP.',
  })
  @ApiCreatedResponse({
    description: 'Account signed in successfully.',
    type: AccessTokenResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized access. Invalid email or account not found.',
    type: HttpExceptionDto,
  })
  signInAccount(
    @Body() request: SignInRequestDto
  ): Promise<AccessTokenResponseDto> {
    return this.authService.signIn(request);
  }

  @Delete('sign-out/:id')
  @ApiOperation({
    summary: 'Sign Out Account',
    description: 'Signs out the account using the provided id.',
  })
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Account signed out successfully.',
  })
  @ApiUnprocessableEntityResponse({
    description: 'Invalid input data.',
    type: HttpExceptionDto,
  })
  signOutAccount(@Param() id: string) {
    return this.authService.signOut(id);
  }
}
