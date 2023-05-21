import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from './user/user.entity'
import { Item } from './item/item.entity'
import { PaymentMethod } from './paymentMethod/paymentMethod.entity'
import { Payment } from './payment/payment.entity'

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    @InjectRepository(PaymentMethod)
    private readonly paymentMethodRepository: Repository<PaymentMethod>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) { }

  async getData() {
    try {
      for (let index = 0; index < 30; index++) {
        const user = new User()
        user.name = "Cristian Camilo"
        user.surname = "Vargas Morales"
        user.username = "wolfGhost" + index
        user.creditBalance = 1000 + index
        await this.userRepository.save(user)

        const item = new Item()
        item.name = "Celular Modelo I32" + index
        item.price = 3000000 + index
        await this.itemRepository.save(item)

        const paymentMethod = new PaymentMethod()
        paymentMethod.brand = "VISA"
        paymentMethod.last4 = (Math.floor(Math.random() * 9000) + 1000).toString()
        paymentMethod.expiration_date = new Date("2002-05-23")
        paymentMethod.userID = index
        paymentMethod.status = 'ACTIVE'
        await this.paymentMethodRepository.save(paymentMethod)

        const payment = new Payment()
        payment.userID = index
        payment.paymentMethodID = index
        payment.totalAmount = (1000 + index).toString()
        payment.billingDate = new Date("2002-03-21")
        payment.status = 'SUCCEEDED'
        await this.paymentRepository.save(payment)

      }
    } catch (error) {
      console.log(error)
      return new HttpException('Error filling the system', HttpStatus.CONFLICT);
    }
    return ("Base de datos poblada - Feliz día :D")
  }
}
