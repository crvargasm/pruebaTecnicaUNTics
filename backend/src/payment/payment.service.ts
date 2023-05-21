import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Payment } from './payment.entity'

import { CreatePaymentDto } from './dto/create-payment.dto'
import { PaymentMethodService } from 'src/paymentMethod/paymentMethod.service'
import { UserService } from 'src/user/user.service'
import { User } from 'src/user/user.entity'

//Operaciones con BD

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
        private readonly userService: UserService,
        private readonly paymentMethodService: PaymentMethodService,
    ) { }

    async getAllPayments() {
        return await this.paymentRepository.find({
            relations: ['user', 'paymentMethod'],
        }) //TODOS los datos dentro de la tabla Payments
    }

    async getPayment(id: number) {
        const paymentFound = await this.paymentRepository.findOne({
            where: {
                id: id
            },
            relations: ['user', 'paymentMethod'],
        })
        if (!paymentFound) {
            return new HttpException('Payment not found', HttpStatus.NOT_FOUND);
        }
        return paymentFound
    }

    async createPayment(payment: CreatePaymentDto) {

        const userFound = await this.userService.getUser(payment.userID)
        const paymentMethodFound = await this.paymentMethodService.getPaymentMethods(payment.userID)

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        if (!paymentMethodFound) {
            return new HttpException('Payment Methods not found', HttpStatus.NOT_FOUND);
        }

        const newPayment = await this.paymentRepository.create(payment)
        newPayment.status = 'PENDING'

        if (userFound instanceof User) {
            newPayment.user = userFound
        } else {
            return new HttpException('Failed to assign user', HttpStatus.NOT_FOUND)
        }

        if (Array.isArray(paymentMethodFound)) {
            newPayment.paymentMethod = paymentMethodFound.find((objeto) => objeto.id === payment.paymentMethodID)
            console.log(newPayment.paymentMethod)
            if (!newPayment.paymentMethod) {
                return new HttpException('The user does not have that associated payment method', HttpStatus.NOT_FOUND)
            }
        } else {
            return new HttpException('Failed to assign paymentMethod', HttpStatus.NOT_FOUND)
        }

        return this.paymentRepository.save(newPayment)
    }

}