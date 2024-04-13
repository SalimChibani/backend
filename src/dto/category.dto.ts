import { IsString, IsNotEmpty } from 'class-validator';

export class CategorytDto {
    @IsString()
    @IsNotEmpty()
    CategoryID: string;

    @IsString()
    @IsNotEmpty()
    CategoryName: string;
}
