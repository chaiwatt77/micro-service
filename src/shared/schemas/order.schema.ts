import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import mongoose from 'mongoose';
import { Product } from './product.schema';

@Schema({
  timestamps: true,
})
export class Order {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  order_by: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  product_list: Product[]; 

  @Prop()
  total_price: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);