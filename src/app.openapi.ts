import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const OpenApi = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('ToDoAPI')
    .setVersion('1.0.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);
};
