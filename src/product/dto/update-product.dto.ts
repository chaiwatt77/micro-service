import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from 'src/shared/schemas/product.schema';
import { User } from 'src/shared/schemas/user.schema';

export class UpdateProductDto {

  @IsEmpty({ message: 'You cannot pass user id' })
  readonly posted_by: User;

  @IsNotEmpty()
  @IsString()
  readonly product_name: string;
  
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, {message: 'Please enter correct category.'})
  readonly category: Category;
}