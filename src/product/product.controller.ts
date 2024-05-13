import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { Product } from 'src/shared/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private ProductService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.ProductService.findAll();
  }

  @Post('new-product')
  @UseGuards(AuthGuard())
  async createBook(
    @Body()
    product:CreateProductDto,
    @Req() req,
  ): Promise<Product> {
    return this.ProductService.create(product, req.user);
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Product> {
    return this.ProductService.findById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
    @Req() req,
  ): Promise<Product> {
    return this.ProductService.updateById(id, product, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  async deleteProduct(
    @Param('id')
    id: string,
    @Req() req,
  ): Promise<Product> {
    return this.ProductService.deleteById(id, req.user);
  }
}
