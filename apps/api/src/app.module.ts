import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClsModule } from 'nestjs-cls';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionsFilter } from './filters/http-exception.filter';
import { CorrelationIdMiddleware } from './middleware/correlation-id.middleware'; // <-- importe aqui
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AccountsModule } from './resources/admin/accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true }, // mantém o contexto CLS ativo por request
    }),
    PrismaModule,
    AccountsModule,
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
