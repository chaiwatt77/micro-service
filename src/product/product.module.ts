import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/shared/schemas/product.schema';
import { UserModule } from 'src/user/user.module';



@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
