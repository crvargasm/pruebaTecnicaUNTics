import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PaymentMethod } from '../paymentMethod/paymentMethod.entity'
import { User } from '../user/user.entity'
@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  totalAmount: string

  @Column()
  status: PaymentStatus

  @Column({ name: 'billing_date' })
  billingDate: Date

  @Column()
  userID: number

  @Column()
  paymentMethodID: number

  @ManyToOne(() => User, user => user.payment)
  user: User

  @ManyToOne(() => PaymentMethod, paymentMethod => paymentMethod.payment)
  paymentMethod?: PaymentMethod
}

export type PaymentStatus = 'PENDING' | 'DECLINED' | 'FAILED' | 'SUCCEEDED'
