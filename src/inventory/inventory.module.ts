import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { InventorySchema } from './schemas/inventory.schema';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [
    MongooseModule.forFeature([{ name: 'Inventory', schema: InventorySchema }])
  ]
})
export class InventoryModule { }
