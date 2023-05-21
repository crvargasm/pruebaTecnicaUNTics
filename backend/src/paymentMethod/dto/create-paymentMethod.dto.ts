export class CreatePaymentMethodDto {
    brand: string
    last4: string;
    expiration_date?: Date;
    userID: number;
}