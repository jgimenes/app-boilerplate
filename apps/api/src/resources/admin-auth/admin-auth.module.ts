import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AdminAuthService],
})
export class AdminAuthModule {}
