import { IsEmail, IsNotEmpty } from 'class-validator';

export class ControllerDto {
    @IsNotEmpty()
    location: string ; 
    @IsNotEmpty()
    createdAt: Date;
    @IsNotEmpty()
    products: string ; 
    @IsNotEmpty()
    exporter: string ; 
    @IsNotEmpty()
    numFact: string ; 
    @IsNotEmpty()
    factDate: Date;
    @IsNotEmpty()
    societe: string ;
    @IsNotEmpty()
    societelocation: string ;
    @IsNotEmpty()
    country: string ;
    @IsNotEmpty()
    ProductCategory: string; // Reference to CategoryID
    @IsNotEmpty()
    quantity: string ;
    @IsNotEmpty()
    price: string ;
}
