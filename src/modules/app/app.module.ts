import { Module } from '@nestjs/common';

import { PaymentsModule } from '../payments/payments.module'

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
