import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from '../entities/Item';

@Controller('items')
export class ItemController {

    constructor(private readonly itemsService: ItemService) { }

    @Get()
    async getAllItems(): Promise<Item[]> {
        return this.itemsService.getAllItems();
    }

    @Post()
    async createItem(@Body() item: Item): Promise<Item> {
        console.log(item)
        return this.itemsService.createItem(item);
    }
}
