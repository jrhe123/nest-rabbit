import { NestFactory } from '@nestjs/core';
import { RMQService } from '@app/common';
import { AuthModule } from './auth.module';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get<RMQService>(RMQService);

  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  // hybrid application
  // 1. microservices
  await app.startAllMicroservices();

  // 2. http application
  await app.listen(configService.get('PORT'));
}
bootstrap();
