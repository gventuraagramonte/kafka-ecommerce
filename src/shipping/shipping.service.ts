import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipping } from './interfaces/shipping.interface';

@Injectable()
export class ShippingService {
    constructor(
        @InjectModel('Shipping') private readonly shippingModel: Model<Shipping>
    ) { }

    async createShipping(shipping: Shipping): Promise<Shipping> {
        const newShipping = await this.shippingModel.create(shipping)
        return newShipping
    }

    async findAllShipping(): Promise<Shipping[]> {
        return await this.shippingModel.find()
    }
}
