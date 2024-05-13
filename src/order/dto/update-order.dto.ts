import { IsArray, IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Product } from 'src/shared/schemas/product.schema';
import { User } from 'src/shared/schemas/user.schema';

export class UpdateOrderDto {
  @IsEmpty({ message: 'You cannot pass user id' })
  readonly order_by: User;

  @IsNotEmpty()
  @IsArray()
  readonly product_list: Product[];

  @IsNotEmpty()
  @IsNumber()
  readonly total_price: number;
}