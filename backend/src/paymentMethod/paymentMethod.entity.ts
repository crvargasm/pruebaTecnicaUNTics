import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../user/user.entity';

@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: PaymentMethodStatus;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: false })
  last4: string;

  @Column()
  expiration_date: Date;

  @Column()
  userID: number;

  @ManyToOne(() => User, (User) => User.paymentMethods)
  user: User;
}

export type PaymentMethodStatus = 'ACTIVE' | 'DECLINED' | 'BALANCE_ISSUE';
