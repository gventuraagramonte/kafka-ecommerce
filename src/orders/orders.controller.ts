import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  async createOrder(@Body() order: Order): Promise<Order> {
    return this.ordersService.createOrder(order)
  }

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.findAllOrders()
  }
}
