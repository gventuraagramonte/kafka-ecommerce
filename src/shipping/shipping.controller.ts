import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { Shipping } from './interfaces/shipping.interface';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) { }

  @Post()
  async createShipping(@Body() shipping: Shipping): Promise<Shipping> {
    return this.shippingService.createShipping(shipping)
  }

  @Get()
  async findAllShippings(): Promise<Shipping[]> {
    return this.shippingService.findAllShipping()
  }
}
