import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded } from 'express';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { rawBody: true });

  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });


  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle("Documention Api Title")
    .setDescription("Documention Description")
    .setVersion("2.0")
    // .addTag("Inkleinventor Backend Development Use Nest.js")

    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("docs", app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
    customSiteTitle: 'Api Docs',
    customCss: '.swagger-ui .topbar { display: none }',
  });

  // app.use('/payment/webhook', bodyParser.raw({ type: 'application/json' }));


  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`
      Server: http://localhost:${port}                
      Swagger: http://localhost:${port}/docs          
      WebSocket: ws://localhost:${port}/socket/message
  `);

}
bootstrap();
