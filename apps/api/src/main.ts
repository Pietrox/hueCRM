import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {WINSTON_MODULE_NEST_PROVIDER} from 'nest-winston';
import {ApplicationModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
      ApplicationModule
  );
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  const devMode = ApplicationModule.devMode;
  if (devMode === true) {
    const swaggerOptions = new DocumentBuilder()
        .setTitle('hueCRM Documentation')
        .setDescription('Below You can test out the backend api and read the description of all endpoints and it`s examples')
        .setVersion('0.0.8')
        .setLicense('MIT License', 'https://github.com/hueSoft/hueCRM')
	    .addBearerAuth('Authorization', 'header')
	    .setBasePath('/api')
        .build();
    const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('/api/docs', app, swaggerDoc, {
      swaggerUrl: `${ApplicationModule.host}/api/docs-json`,
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
  await app.listen(ApplicationModule.port);
}
bootstrap().catch(err => console.error(err));
