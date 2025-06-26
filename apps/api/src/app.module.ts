import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ClsModule } from 'nestjs-cls';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionsFilter } from './filters/http-exception.filter';
import { CorrelationIdMiddleware } from './middleware/correlation-id.middleware'; // <-- importe aqui
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AdminAccountsModule } from './resources/admin-accounts/admin-accounts.module';
import { AdminAuthModule } from './resources/admin-auth/admin-auth.module';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true }, // mantém o contexto CLS ativo por request
    }),
    PrismaModule,
    AdminAccountsModule,
    AdminAuthModule,
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, HttpExceptionsFilter],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorrelationIdMiddleware)
      .forRoutes({ path: '*path', method: RequestMethod.ALL });
  }
}
