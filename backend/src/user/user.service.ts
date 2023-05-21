import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
//Operaciones con BD

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) { }

    async getAllUsers() {
        return await this.userRepository.find() //TODOS los datos dentro de la tabla Users
    }

    async getUser(id: number) {
        const userFound = await this.userRepository.findOne({
            where: {
                id: id
            },
            relations: ['paymentMethods']
        })
        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return userFound
    }

    async createUser(user: CreateUserDto) {
        const newUser = await this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    async updateUser(id: number, user: UpdateUserDto) {
        const userFound = await this.userRepository.findOne({
            where: {
                id: id
            }
        })
        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        const userUpdated = await this.userRepository.update({ id }, user)
        return "Rows affected: " + userUpdated.affected

    }

    async deleteUser(id: number) {
        const userDeleted = await this.userRepository.delete({ id })

        if (userDeleted.affected === 0) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return "Rows affected: " + userDeleted.affected
    }
}