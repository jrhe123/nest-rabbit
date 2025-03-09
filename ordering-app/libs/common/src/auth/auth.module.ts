import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { RMQModule } from '../rmq/rmq.module';
import { AUTH_SERVICE } from './services';

@Module({
  imports: [RMQModule.register({ name: AUTH_SERVICE })],
  exports: [RMQModule],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
