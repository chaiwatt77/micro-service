import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Order } from 'src/shared/schemas/order.schema';
import { User } from 'src/shared/schemas/user.schema';


@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private OrderModel: mongoose.Model<Order>,
  ) {}

  async findAll(): Promise<Order[]> {
    const orders = await this.OrderModel.find();
    return orders;
  }

  async create(order: Order, user: User): Promise<Order> {
    const data = Object.assign(order, { order_by: user._id });
    const res = await this.OrderModel.create(data);
    return res;
  }

  async findById(id: string): Promise<Order> {
    const order = await this.OrderModel.findById(id);
    if (!order) {
      throw new NotFoundException('Book not found.');
    }
    return order;
  }

  async updateById(id: string, order: Order, user: User): Promise<Order> {
    return await this.OrderModel.findByIdAndUpdate(id, order, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, user: User): Promise<Order> {
    return await this.OrderModel.findByIdAndDelete(id);
  }
}
