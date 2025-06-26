import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { otpUtils } from 'src/utils/otp.utils';
import { SignInRequestDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly unauthorizedErrorMessage =
    'Email or password is not invalid';

  constructor(private readonly prisma: PrismaService) {}
  async signInAdminAccount(request: SignInRequestDto): Promise<void> {
    const { email, otp } = request;
    console.log(otp);

    // Find the admin account by email

    const adminAccount = await this.prisma.adminAccount.findUnique({
      where: {
        email,
      },
    });

    // If the admin account does not exist, throw an error

    if (!adminAccount) {
      this.logger.warn(`Admin account with email ${email} not found`);
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const otpHashed = adminAccount.otp;
    const expiresOtp = adminAccount.otpExpiresAt;

    // Check if the OTP is expired

    if (expiresOtp && new Date() > expiresOtp) {
      this.logger.warn(`OTP for admin account with email ${email} has expired`);
      throw new BadRequestException(
        'OTP has expired, please make a new login '
      );
    }

    // Compare the provided OTP with the stored hashed OTP

    if (otpHashed && !(await otpUtils.compareOTP(otp, otpHashed))) {
      this.logger.warn(`Invalid OTP for admin account with email ${email}`);
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }
  }

  //TODO: Implemet jwt token generation and return it after successful login
}
