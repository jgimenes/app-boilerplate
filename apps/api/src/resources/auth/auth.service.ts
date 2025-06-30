import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';
import { randomUUID } from 'crypto';
import { ClsService } from 'nestjs-cls';
import { PrismaService } from 'src/prisma/prisma.service';
import { authUtils } from 'src/utils/auth.utils';
import {
  OtpRequestDto,
  SignInRequestDto,
  SignInResponseDto,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
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

  //Todo: Sign On Account

  //* This method is used get OTP during sign-in

  async otpRequest(request: OtpRequestDto): Promise<void> {
    const { email } = request;

    const account = await this.prisma.account.findUnique({
      where: {
        email,
      },
      include: { auth: true },
    });

    if (!account || account.deletedAt) {
      this.logger.warn(
        `[${this.correlationId}] - Account with email ${email} not found or deleted`
      );
      throw new UnprocessableEntityException(
        `Account with email ${email} not found or deleted`
      );
    }

    const authData = account?.auth;

    // Check if the account already has a valid OTP, if so, skip OTP generation and same
    if (authData?.otpExpiresAt && authData.otpExpiresAt > new Date()) {
      console.log(
        `[${this.correlationId}] - Account with email ${email} already has a valid OTP`
      );
      return;
    }

    const stringOtp = authUtils.generateOTP();
    console.log(`Generated OTP: ${stringOtp}`);

    const otpHash = authUtils.hash(stringOtp);
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000); // 1 minuto

    // Upsert the account auth data with the OTP and expiration time
    const auth = await this.prisma.auth.upsert({
      where: {
        accountId: account.id,
      },
      update: {
        otp: otpHash,
        otpExpiresAt: otpExpiration,
      },
      create: {
        accountId: account.id,
        otp: otpHash,
        otpExpiresAt: otpExpiration,
      },
    });

    // Check if the auth data was successfully created or updated
    if (!auth) {
      this.logger.error(
        `[${this.correlationId}] - Failed to upsert account auth for email ${email}`
      );
      throw new InternalServerErrorException();
    }

    // TODO: enviar o OTP
  }

  //* Sign In the account

  async signIn(request: SignInRequestDto): Promise<SignInResponseDto> {
    const { email, otp } = request;

    // Find the auth data for the account

    const account = await this.prisma.account.findUnique({
      where: {
        email,
      },
      include: {
        auth: true,
      },
    });

    // Check if the account exists

    if (!account) {
      this.logger.warn(
        `[${this.correlationId}] - Account ${email} is not registered`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const authData = account.auth;

    if (!authData) {
      this.logger.warn(
        `[${this.correlationId}] - No auth data found for account email ${email}`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const otpHash = authData.otp;

    if (!otpHash) {
      this.logger.warn(
        `[${this.correlationId}] - No OTP found for account email ${email}`
      );
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    // Validate the OTP and check if it has expired
    const isOtpValid = await authUtils.compare(otp, otpHash);

    const isOtpExpired = authData?.otpExpiresAt
      ? authData.otpExpiresAt < new Date()
      : true;

    if (!isOtpValid || isOtpExpired) {
      this.logger.warn(
        `[${this.correlationId}] - OTP validation failed for account email ${email}. Valid: ${isOtpValid}, Expired: ${isOtpExpired}`
      );
      void this.removeOtpData(account.id);
      throw new UnauthorizedException(this.unauthorizedErrorMessage);
    }

    const accessToken = await this.getAccessToken(
      account.id,
      account.name,
      account.email,
      account.phone
    );
    const refreshToken = await this.getRefreshToken(account.id);

    return plainToInstance(SignInResponseDto, {
      accessToken,
      refreshToken,
    });
  }

  //Todo: Verify Account
  //Todo: Refresh the account access token

  //* Sign Out the account

  async signOut(id: string): Promise<void> {
    // Find the account by email
    const account = await this.prisma.account.findUnique({
      where: { id },
    });

    console.log(account);
    if (!account) {
      this.logger.warn(
        `[${this.correlationId}] - Account with email ${id} not found`
      );
      throw new UnprocessableEntityException(`Account not found`);
    }

    // Remove the OTP and refresh token data
    await this.removeOtpData(account.id);

    // Optionally, you can also clear the refresh token
    await this.prisma.auth.update({
      where: { accountId: account.id },
      data: {
        refreshTokenId: null,
        refreshToken: null,
        refreshTokenExpiresAt: null,
      },
    });

    this.logger.log(
      `[${this.correlationId}] - Account with id ${id} signed out successfully`
    );
  }

  //* Get Access Token

  getAccessToken(
    sub: string,
    name: string,
    email: string,
    phone: string | undefined | null
  ): Promise<string> {
    const accessToken: string = this.jwtService.sign(
      {
        sub,
        name,
        email,
        phone,
        iss: 'your-issuer', // Define your issuer
        aud: 'your-audience', // Define your audience
      },
      {
        expiresIn: '5m',
      }
    );

    if (!accessToken) {
      this.logger.error(
        `[${this.correlationId}] - Failed to generate JWT token for account email ${email}`
      );
      throw new InternalServerErrorException();
    }

    return Promise.resolve(accessToken);
  }

  //* Get Refresh Token

  async getRefreshToken(id: string): Promise<string> {
    const jti = randomUUID();
    const token = this.jwtService.sign(
      { sub: id, jti },
      {
        expiresIn: '7d',
      }
    );

    const refreshTokenExpiresAt = new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 7
    ); // 7 dias

    const hashedToken = authUtils.hash(token);

    // Upsert the refresh token in the database
    const refreshToken = await this.prisma.auth.upsert({
      where: { accountId: id },
      update: {
        refreshTokenId: jti,
        refreshToken: hashedToken,
        refreshTokenExpiresAt,
      },
      create: {
        accountId: id,
        refreshTokenId: jti,
        refreshToken: hashedToken,
        refreshTokenExpiresAt,
      },
    });

    if (!refreshToken) {
      this.logger.error(
        `[${this.correlationId}] - Failed to upsert refresh token for account ID ${id}`
      );
      throw new InternalServerErrorException();
    }

    return token; // Return the generated refresh token
  }

  //* Remove the OTP auth data

  async removeOtpData(id: string): Promise<void> {
    await this.prisma.auth.update({
      data: {
        otp: null,
        otpExpiresAt: null,
      },
      where: { accountId: id },
    });
  }
}
