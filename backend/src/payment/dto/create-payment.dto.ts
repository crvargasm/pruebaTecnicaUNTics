export class CreatePaymentDto {
    userID: number
    paymentMethodID: number
    totalAmount: string
    billingDate: Date
}