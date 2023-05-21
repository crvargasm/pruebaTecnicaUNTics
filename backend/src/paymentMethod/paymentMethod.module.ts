import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodController } from './paymentMethod.controller';
import { PaymentMethodService } from './paymentMethod.service';
import { PaymentMethod } from 'src/paymentMethod/paymentMethod.entity';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentMethod]), UserModule],
    controllers: [PaymentMethodController],
    providers: [PaymentMethodService],
    exports: [PaymentMethodService],
})
export class PaymentMethodModule { }
