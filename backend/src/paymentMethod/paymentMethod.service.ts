import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PaymentMethod } from './paymentMethod.entity'

import { CreatePaymentMethodDto } from './dto/create-paymentMethod.dto'

import { UserService } from 'src/user/user.service'
import { User } from 'src/user/user.entity'

//Operaciones con BD

@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectRepository(PaymentMethod) private readonly paymentMethodRepository: Repository<PaymentMethod>,
        private readonly userService: UserService
    ) { }

    async getAllPaymentMethods() {
        return await this.paymentMethodRepository.find({
            relations: ['user']
        }) //TODOS los datos dentro de la tabla PaymentMethods
    }

    async getPaymentMethods(userID: number) {
        const userFound = await this.paymentMethodRepository.find({
            where: {
                userID: userID
            },
            relations: ['user']
        })
        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return userFound
    }

    async createPaymentMethod(paymentMethod: CreatePaymentMethodDto) {
        const userFound = await this.userService.getUser(paymentMethod.userID)

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const newPaymentMethod = this.paymentMethodRepository.create(paymentMethod)
        newPaymentMethod.status = 'ACTIVE'

        if (userFound instanceof User) {
            newPaymentMethod.user = userFound
        } else {
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return this.paymentMethodRepository.save(newPaymentMethod)
    }

    async deletePaymentMethod(id: number) {
        const paymentMethodDeleted = await this.paymentMethodRepository.delete({ id })

        if (paymentMethodDeleted.affected === 0) {
            return new HttpException('PaymentMethod not found', HttpStatus.NOT_FOUND);
        }
        return "Rows affected: " + paymentMethodDeleted.affected
    }
}