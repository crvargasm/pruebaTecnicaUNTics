import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { User } from '../user/user.entity'
import { Payment } from 'src/payment/payment.entity'

@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  status: PaymentMethodStatus

  @Column({ nullable: false })
  brand: string

  @Column({ nullable: false })
  last4: string

  @Column()
  expiration_date: Date

  @Column()
  userID: number

  @ManyToOne(() => User, (User) => User.paymentMethods)
  user: User

  @OneToMany(() => Payment, (payment) => payment.paymentMethod)
  payment: Payment[]
}

export type PaymentMethodStatus = 'ACTIVE' | 'DECLINED' | 'BALANCE_ISSUE'
