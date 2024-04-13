import { IsString, IsNotEmpty } from 'class-validator';

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    ProductID: string;

    @IsString()
    @IsNotEmpty()
    ProductName: string;

    @IsString()
    @IsNotEmpty()
    ProductCategory: string; 
}
