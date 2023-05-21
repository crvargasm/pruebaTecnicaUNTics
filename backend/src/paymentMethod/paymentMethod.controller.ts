import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common'
import { PaymentMethodService } from './paymentMethod.service'
import { CreatePaymentMethodDto } from './dto/create-paymentMethod.dto'

@Controller('paymentMethod')
export class PaymentMethodController {

    constructor(private readonly paymentMethodsService: PaymentMethodService) { }

    @Get()
    async getAllPaymentMethods() {
        return this.paymentMethodsService.getAllPaymentMethods()
    }

    @Get(':id')
    async getPaymentMethods(@Param('id', ParseIntPipe) id: number) {
        return this.paymentMethodsService.getPaymentMethods(id)
    }

    @Post()
    async createPaymentMethod(@Body() paymentMethod: CreatePaymentMethodDto) {
        return this.paymentMethodsService.createPaymentMethod(paymentMethod)
    }


    @Delete(':id')
    async deletePaymentMethod(@Param('id', ParseIntPipe) id: number) {
        return this.paymentMethodsService.deletePaymentMethod(id)
    }
}