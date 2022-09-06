import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  
  const config = new DocumentBuilder()
  .setTitle('Milknow')
  .setDescription('The Ecomilknow API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
