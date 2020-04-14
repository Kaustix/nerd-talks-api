import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: {
        prettyPrint: process.env.NODE_ENV !== 'production',
      },
    }),
  );
  const configService = app.get(ConfigService);
  const port = configService.get<number>('HOST_PORT', 3000);
  const url = configService.get<string>('HOST_URL', '0.0.0.0');
  await app.listen(port, url);
}

bootstrap();
