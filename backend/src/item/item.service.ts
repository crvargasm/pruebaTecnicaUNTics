import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Item } from './item.entity'
import { CreateItemDto } from './dto/create-item.dto'
import { UpdateItemDto } from './dto/update-item.dto'

//Operaciones con BD

@Injectable()
export class ItemService {
    constructor(@InjectRepository(Item) private readonly itemRepository: Repository<Item>) { }

    async getAllItems() {
        return await this.itemRepository.find() //TODOS los datos dentro de la tabla Items
    }

    async getItem(id: number) {
        const itemFound = await this.itemRepository.findOne({
            where: {
                id: id
            }
        })
        if (!itemFound) {
            return new HttpException('Item not found', HttpStatus.NOT_FOUND);
        }
        return itemFound
    }

    async createItem(item: CreateItemDto) {
        const newItem = await this.itemRepository.create(item)
        return this.itemRepository.save(newItem)
    }

    async updateItem(id: number, item: UpdateItemDto) {
        const itemFound = await this.itemRepository.findOne({
            where: {
                id: id
            }
        })
        if (!itemFound) {
            return new HttpException('Item not found', HttpStatus.NOT_FOUND);
        }
        const itemUpdated = await this.itemRepository.update({ id }, item)
        return "Rows affected: " + itemUpdated.affected

    }


    async deleteItem(id: number) {
        const itemDeleted = await this.itemRepository.delete({ id })

        if (itemDeleted.affected === 0) {
            return new HttpException('Item not found', HttpStatus.NOT_FOUND);
        }
        return "Rows affected: " + itemDeleted.affected
    }

}
