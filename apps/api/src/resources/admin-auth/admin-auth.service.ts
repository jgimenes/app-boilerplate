import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClsService } from 'nestjs-cls';
import { PrismaService } from 'src/prisma/prisma.service';
import { authUtils } from 'src/utils/auth.utils';
import {
  SignInAdminRequestDto,
  SignInValidateRequestDto,
} from './dto/admin-auth.dto';

@Injectable()
export class AdminAuthService {
  private readonly logger = new Logger(AdminAuthService.name);
  private readonly unauthorizedErrorMessage = 'Email or password is not valid';

  constructor(
    private readonly prisma: PrismaService,
    private readonly cls: ClsService,
    private readonly jwtService: JwtService
  ) {}

  private get correlationId(): string {
    const rawCorrelationId: string | undefined = this.cls.get('correlationId');
    return typeof rawCorrelationId === 'string' ? rawCorrelationId : 'N/A';
  }

  //* This method is used to validate the admin account during sign-in

  async signInValidateAdminAccount(
    request: SignInValidateRequestDto
  ): Promise<void> {
    const { email } = request;

    const adminAccount = await this.prisma.adminAccount.findUnique({
      where: {
        email,
      },
    });

    if (!adminAccount || adminAccount.deletedAt) {
      this.logger.warn(
        `[${this.correlationId}] - Admin account with email ${email} not found or deleted`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const stringOtp = authUtils.generateOTP();
    console.log(`Generated OTP: ${stringOtp}`);

    const otpHash = authUtils.hashOTP(stringOtp);
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000); // 1 minuto

    // Upsert the admin account auth data with the OTP and expiration time
    const auth = await this.prisma.adminAccountAuth.upsert({
      where: {
        adminAccountId: adminAccount.id,
      },
      update: {
        otp: otpHash,
        otpExpiresAt: otpExpiration,
      },
      create: {
        adminAccountId: adminAccount.id,
        otp: otpHash,
        otpExpiresAt: otpExpiration,
      },
    });

    // Check if the auth data was successfully created or updated
    if (!auth) {
      this.logger.error(
        `[${this.correlationId}] - Failed to upsert admin account auth for email ${email}`
      );
      throw new InternalServerErrorException();
    }

    // TODO: enviar o OTP
  }

  //* Sign In the admin account

  async signInAdminAccount(request: SignInAdminRequestDto): Promise<void> {
    const { email, otp } = request;

    // Find the auth data for the admin account

    const account = await this.prisma.adminAccount.findUnique({
      where: {
        email,
      },
      include: {
        AdminAccountAuth: true,
      },
    });

    // Check if the account exists

    if (!account) {
      this.logger.warn(
        `[${this.correlationId}] - Account ${email} is not registered`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const authData = account.AdminAccountAuth;

    if (!authData) {
      this.logger.warn(
        `[${this.correlationId}] - No auth data found for admin account email ${email}`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const otpHash = authData.otp;

    if (!otpHash) {
      this.logger.warn(
        `[${this.correlationId}] - No OTP found for admin account email ${email}`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    // Validate the OTP and check if it has expired
    const isOtpValid = await authUtils.compareOTP(otp, otpHash);

    const isOtpExpired = authData?.otpExpiresAt
      ? authData.otpExpiresAt < new Date()
      : true;

    if (!isOtpValid || isOtpExpired) {
      this.logger.warn(
        `[${this.correlationId}] - OTP validation failed for admin account email ${email}. Valid: ${isOtpValid}, Expired: ${isOtpExpired}`
      );
      void this.removeAdminAccountAuth(account.id);
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    // TODO: Generate and return a JWT token for the admin account
  }

  //* Remove the admin account auth data
  async removeAdminAccountAuth(id: string): Promise<void> {
    await this.prisma.adminAccountAuth.delete({
      where: { adminAccountId: id },
    });
  }
}
