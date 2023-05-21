import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { CreatePaymentDto } from './dto/create-payment.dto'

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentsService: PaymentService) { }

    @Get()
    async getAllPayments() {
        return this.paymentsService.getAllPayments()
    }

    @Get(':id')
    async getPayment(@Param('id', ParseIntPipe) id: number) {
        return this.paymentsService.getPayment(id)
    }

    @Post()
    async createPayment(@Body() payment: CreatePaymentDto) {
        return this.paymentsService.createPayment(payment)
    }

}