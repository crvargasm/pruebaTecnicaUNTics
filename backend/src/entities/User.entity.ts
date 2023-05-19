import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethod } from './paymentMethod.entity';

@Entity() //Sería el semejante a una Tabla en SQL
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()   //Columnas SQL
  name: string;

  @Column()
  surname: string;

  @Column()
  username: string;

  @Column()
  creditBalance: number;

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.User)
  paymentMethods: PaymentMethod[];
}
