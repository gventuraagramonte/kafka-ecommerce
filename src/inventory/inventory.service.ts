import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory } from './interfaces/inventory.interface';

@Injectable()
export class InventoryService {
    constructor(
        @InjectModel('Inventory') private readonly inventoryModel: Model<Inventory>
    ) { }

    async createInventory(inventory: Inventory): Promise<Inventory> {
        const newInventory = await this.inventoryModel.create(inventory)
        return newInventory
    }

    async findAllInventory(): Promise<Inventory[]> {
        return await this.inventoryModel.find()
    }
}
