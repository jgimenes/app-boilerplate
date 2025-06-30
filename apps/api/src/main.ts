import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { adminSetupSwagger, publicSetupSwagger } from './config/swagger.config';
import { HttpExceptionsFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const prefix = configService.get<string>('API_PREFIX') ?? 'api';
  const version = configService.get<string>('API_VERSION') ?? 'v1';
  const port = configService.get<number>('API_PORT') ?? 3000;

  //* Security
  app.use(helmet());

  //* CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  //* Global Prefix
  app.setGlobalPrefix(`${prefix}/${version}`);

  //* Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não definidas no DTO
      forbidNonWhitelisted: true, // Lança erro se propriedades extras forem enviadas
      transform: true, // Faz a conversão automática (e.g., string → number)
    })
  );

  //* Setup Swagger documentation Public

  publicSetupSwagger(app);

  //* Setup Swagger documentation Admin

  adminSetupSwagger(app);

  //* Exception Filter Enable

  const httpFilter = app.get(HttpExceptionsFilter);

  app.useGlobalFilters(httpFilter);

  await app.listen(port);
}
void bootstrap();
