import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel('Order') private readonly orderModel: Model<Order>
    ) { }

    async createOrder(order: Order): Promise<Order> {
        const newOrder = await this.orderModel.create(order)
        return newOrder
    }

    async findAllOrders(): Promise<Order[]> {
        return await this.orderModel.find()
    }
}
