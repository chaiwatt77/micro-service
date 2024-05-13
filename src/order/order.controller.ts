import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from 'src/shared/schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async createOrder(
    @Body()
    order:CreateOrderDto,
    @Req() req,
  ): Promise<Order> {
    return this.orderService.create(order, req.user);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Order> {
    return this.orderService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    order: UpdateOrderDto,
    @Req() req,
  ): Promise<Order> {
    return this.orderService.updateById(id, order, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteBook(
    @Param('id')
    id: string,
    @Req() req,
  ): Promise<Order> {
    return this.orderService.deleteById(id, req.user);
  }
}
