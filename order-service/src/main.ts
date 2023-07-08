import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('orders-service');
  enableSwaggerConfig(app);
  const port = process.env.PORT || 80;
  await app.listen(port);
}
bootstrap();

const enableSwaggerConfig = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Rabbit Delivery Orders API')
    .setDescription('Documentation for Rabbit Delivery Orders API')
    .setVersion(process.env.npm_package_version || '1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
};
