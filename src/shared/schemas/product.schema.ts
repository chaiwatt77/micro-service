import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import mongoose from 'mongoose';

export enum Category {
  MEN = 'Men',
  WOMEN = 'Women',
}

@Schema({
  timestamps: true,
  collection: 'my_products'
})
export class Product {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  posted_by: User;

  @Prop()
  product_name: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);