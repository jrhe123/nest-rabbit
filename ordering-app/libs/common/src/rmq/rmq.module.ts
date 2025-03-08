import { Module } from '@nestjs/common';
import { RMQService } from './rmq.service';

@Module({
  providers: [RMQService],
  exports: [RMQService],
})
export class RMQModule {}
