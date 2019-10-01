import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestFastifyApplication, FastifyAdapter} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
  );
  app.setGlobalPrefix('/api');
  await app.listen(AppModule.port);
}
bootstrap();
