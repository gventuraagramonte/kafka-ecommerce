import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingController } from './shipping.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShippingSchema } from './schemas/shipping.schema';

@Module({
  controllers: [ShippingController],
  providers: [ShippingService],
  imports: [
    MongooseModule.forFeature([{ name: 'Shipping', schema: ShippingSchema }])
  ]
})
export class ShippingModule { }
