import {ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestFastifyApplication, FastifyAdapter} from '@nestjs/platform-fastify';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
  );
  const devMode = AppModule.devMode;
  // tslint:disable-next-line:no-conditional-assignment
  if (devMode === true) {
    const swaggerOptions = new DocumentBuilder()
        .setTitle('hueCRM Documentation')
        .setDescription('Below You can test out the backend api and read the description of all enpoints and it`s examples')
        .setVersion('0.0.1')
        .setHost(AppModule.host)
        .setSchemes(AppModule.devMode ? 'http' : 'https')
        .setBasePath('/api')
        .addBearerAuth('Authorization', 'header')
        .build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('/api/docs', app, swaggerDoc, {
      swaggerUrl: `${AppModule.host}/api/docs-json`,
      explorer: true,
      swaggerOptions: {
        docExpansion: 'list',
        filter: true,
        displayRequestDuration: true,
      },
      customCss: '.opblock-summary-path {font-size: 18px !important; font-weight: normal !important;}' +
          '.opblock-summary-description {font-size: 18px !important; text-align: right !important;' +
          'font-weight: bold !important;}',
    });
  }
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: false,
    transform: true,
  }));
  app.enableCors();
  await app.listen(AppModule.port);
}
bootstrap();
