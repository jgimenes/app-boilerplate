import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

//* Public Swagger Setup

export function publicSetupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest JS Boilerplate - API')
    .setDescription(
      'API for the Nest JS project, providing a robust foundation for building scalable applications.'
    )
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'jwt'
    )
    .addTag('Authentication', 'Endpoints for user authentication')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const docPath = '/api/v1/docs';
  const swaggerCustomOptions: SwaggerCustomOptions = {
    customSiteTitle: `Nest JS Boilerplate - Swagger UI`,
  };

  SwaggerModule.setup(docPath, app, document, swaggerCustomOptions);
}

export function adminSetupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest JS Boilerplate - API - Admin')
    .setDescription(
      'API for the Nest JS project, providing a robust foundation for building scalable applications.'
    )
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'jwt'
    )
    .addTag('Authentication', 'Endpoints for user authentication')
    .addTag('Accounts', 'Endpoints for managing accounts')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const docPath = '/api/v1/admin/docs';
  const swaggerCustomOptions: SwaggerCustomOptions = {
    customSiteTitle: `Nest JS Boilerplate - Swagger UI`,
  };

  SwaggerModule.setup(docPath, app, document, swaggerCustomOptions);
}
