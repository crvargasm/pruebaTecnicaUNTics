import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('user')
export class UserController {

    constructor(private readonly usersService: UserService) { }

    @Get()
    async getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUser(id)
    }

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user)
    }

    @Patch(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        return this.usersService.updateUser(id, user)
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id)
    }
}