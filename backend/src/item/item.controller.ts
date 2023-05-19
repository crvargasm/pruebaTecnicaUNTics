import { Controller, Get, Post, Delete, Body, Param, ParseIntPipe, Patch } from '@nestjs/common'
import { ItemService } from './item.service'
import { Item } from './item.entity'
import { CreateItemDto } from './dto/create-item.dto'
import { UpdateItemDto } from './dto/update-item.dto'

@Controller('item')
export class ItemController {

    constructor(private readonly itemsService: ItemService) { }

    @Get()
    async getAllItems() {
        return this.itemsService.getAllItems()
    }

    @Get(':id')
    async getItem(@Param('id', ParseIntPipe) id: number) {
        return this.itemsService.getItem(id)
    }

    @Post()
    async createItem(@Body() item: CreateItemDto) {
        return this.itemsService.createItem(item)
    }

    @Patch(':id')
    async updateItem(@Param('id', ParseIntPipe) id: number, @Body() item: UpdateItemDto) {
        return this.itemsService.updateItem(id, item)
    }

    @Delete(':id')
    async deleteItem(@Param('id', ParseIntPipe) id: number) {
        return this.itemsService.deleteItem(id)
    }
}
