import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
  }
}
