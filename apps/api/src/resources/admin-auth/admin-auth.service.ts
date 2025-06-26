import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/prisma/prisma.service';
import { authUtils } from 'src/utils/auth.utils';
import {
  SignInValidateRequestDto,
  SignInValidateResponseDto,
} from './dto/admin-auth.dto';

@Injectable()
export class AdminAuthService {
  private readonly logger = new Logger(AdminAuthService.name);
  private readonly unauthorizedErrorMessage =
    'Email or password is not invalid';

  constructor(private readonly prisma: PrismaService) {}

  //* This method is used to validate the admin account during sign-in

  async signInValidateAdminAccount(
    request: SignInValidateRequestDto
  ): Promise<SignInValidateResponseDto> {
    const { email } = request;

    // Find the admin account by email

    const adminAccount = await this.prisma.adminAccount.findUnique({
      where: {
        email,
        deletedAt: null, // Ensure the account is not deleted
      },
    });

    // If the admin account does not exist, throw an error

    if (!adminAccount) {
      this.logger.warn(`Admin account with email ${email} not found`);
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    // If the admin account exists, generate a otp
    const stringOtp = authUtils.generateOTP();

    console.log(`Generated OTP: ${stringOtp}`);

    const otpHash = authUtils.hashOTP(stringOtp);
    const otpExpiration = new Date(Date.now() + 1 * 60 * 1000); // OTP valid for 1 minutes

    // Update the admin account with the OTP hash and expiration time

    const updatedAdminAccount = await this.prisma.adminAccountAuth.create({
      data: {
        adminAccountId: adminAccount.id,
        otp: otpHash,
        otpExpiresAt: otpExpiration,
      },
    });

    // If the update is successful, log the success message
    if (!updatedAdminAccount) {
      this.logger.error(
        `Failed to update admin account with email ${email} with OTP`
      );
      throw new InternalServerErrorException();
    }

    //TODO: Send OTP to the admin account via email or SMS

    return plainToInstance(SignInValidateResponseDto, adminAccount, {
      excludeExtraneousValues: true,
    });
  }
}
