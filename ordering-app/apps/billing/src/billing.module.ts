import { ValidationSchema } from './../../../node_modules/class-validator/types/validation-schema/ValidationSchema.d';
import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { RMQModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
    }),
    RMQModule,
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
