import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { User } from './user/user.entity';
import { Item } from './item/item.entity';
import { Payment } from './payment/payment.entity';
import { PaymentMethod } from './paymentMethod/paymentMethod.entity';

import { UserModule } from './user/user.module';
import { ItemModule } from './item/item.module';
import { PaymentMethodModule } from './paymentMethod/paymentMethod.module';
import { PaymentModule } from './payment/payment.module';

const entities = [User, Item, Payment, PaymentMethod];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: ['query', 'error'],
    }),
    TypeOrmModule.forFeature(entities),
    UserModule,
    ItemModule,
    PaymentMethodModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }