import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Nest JS Boilerplate - API')
    .setDescription(
      'API for the Nest JS project, providing a robust foundation for building scalable applications.'
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .addTag('Admin Accounts', 'Endpoints for managing admin accounts')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const docPath = '/api/v1/docs';
  const swaggerCustomOptions: SwaggerCustomOptions = {
    customSiteTitle: `Nest JS Boilerplate - Swagger UI`,
  };

  SwaggerModule.setup(docPath, app, document, swaggerCustomOptions);
}
