import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethod } from './PaymentMethod';
import { User } from './User';
@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  totalAmount: string;

  @Column()
  status: PaymentStatus;

  @Column({ name: 'billing_date' })
  billingDate: Date;

  @ManyToOne(() => User)
  User: User;

  @ManyToOne(() => PaymentMethod)
  paymentMethod?: PaymentMethod;
}

export type PaymentStatus = 'PENDING' | 'DECLINED' | 'FAILED' | 'SUCCEEDED';
