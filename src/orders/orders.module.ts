import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schemas/order.schema';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])]
})
export class OrdersModule { }
