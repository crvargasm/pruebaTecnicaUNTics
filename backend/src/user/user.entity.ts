import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethod } from '../paymentMethod/paymentMethod.entity';

@Entity() //Sería el semejante a una Tabla en SQL
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()   //Columnas SQL
  name: string;

  @Column()
  surname: string;

  @Column()
  username: string;

  @Column()
  creditBalance: number;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.user)
  paymentMethods: PaymentMethod[];
}
