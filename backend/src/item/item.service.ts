import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../entities/Item';

//Operaciones con BD

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private readonly itemRepository: Repository<Item>,
    ) { }

    async getAllItems(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    async createItem(item: Item): Promise<Item> {
        return this.itemRepository.save(item);
    }
}
