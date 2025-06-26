import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AdminAccountsController } from './admin-accounts.controller';
import { AdminAccountsService } from './admin-accounts.service';

@Module({
  imports: [PrismaModule],
  controllers: [AdminAccountsController],
  providers: [AdminAccountsService],
})
export class AdminAccountsModule {}
