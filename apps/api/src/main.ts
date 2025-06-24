import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

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
      whitelist: true,
      transform: true,
      transformOptions: { groups: ['transform'] },
    })
  );

  //* Setup Swagger documentation

  setupSwagger(app);

  await app.listen(port);
}
void bootstrap();
