import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './interfaces/inventory.interface';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) { }

  @Post()
  async createInventory(@Body() inventory: Inventory): Promise<Inventory> {
    return this.inventoryService.createInventory(inventory)
  }

  @Get()
  async findAllInventory(): Promise<Inventory[]> {
    return this.inventoryService.findAllInventory()
  }
}
