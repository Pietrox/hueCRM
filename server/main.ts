import {ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(
      ApplicationModule,
  );
  const devMode = ApplicationModule.devMode;
  // tslint:disable-next-line:no-conditional-assignment
  if (devMode === true) {
    const swaggerOptions = new DocumentBuilder()
        .setTitle('hueCRM Documentation')
        .setDescription('Below You can test out the backend api and read the description of all enpoints and it`s examples')
        .setVersion('0.0.1')
        .setHost(ApplicationModule.host)
        .setSchemes(ApplicationModule.devMode ? 'http' : 'https')
        .setBasePath('/api')
        .addBearerAuth('Authorization', 'header')
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
