import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInRequestDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
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

    if (!adminAccount) {
      this.logger.warn(`Admin account with email ${email} not found`);
      throw new BadRequestException('Email or password is not invalid');
    }

    // Verify the OTP
  }
}
