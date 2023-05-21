import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethod } from '../paymentMethod/paymentMethod.entity';
import { User } from '../user/user.entity';
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
