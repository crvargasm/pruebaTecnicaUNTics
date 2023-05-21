import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { Payment } from 'src/payment/payment.entity';

import { UserModule } from 'src/user/user.module';
import { PaymentMethodModule } from 'src/paymentMethod/paymentMethod.module';

@Module({
    imports: [TypeOrmModule.forFeature([Payment]), UserModule, PaymentMethodModule],
    controllers: [PaymentController],
    providers: [PaymentService]
})
export class PaymentModule { }
