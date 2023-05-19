import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User';

@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: PaymentMethodStatus;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: false })
  last4: string;

  @Column()
  expiration_date: Date;

  @ManyToOne(() => User, (User) => User.paymentMethods)
  User: User;
}

export type PaymentMethodStatus = 'ACTIVE' | 'DECLINED' | 'BALANCE_ISSUE';
