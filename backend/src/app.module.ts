import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Payment } from './entities/Payment.entity';
import { User } from './entities/User.entity';
import { PaymentMethod } from './entities/PaymentMethod.entity';
import { ItemModule } from './item/item.module';
import { Item } from './item/item.entity';
const entities = [User, Payment, PaymentMethod, Item];

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
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
