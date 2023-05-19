import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentMethod } from './PaymentMethod.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  username: string;

  @Column()
  creditBalance: number;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.User)
  paymentMethods: PaymentMethod[];
}
