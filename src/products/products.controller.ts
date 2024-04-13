import { ProductDto } from 'src/dto/product.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {

    constructor(private readonly service: ProductsService){};
    @Post()
    Add(@Body() body:ProductDto){
        return this.service.add(body); 
    }
    @Get()
    FindAll(){
        return this.service.findAll();
    }
    @Get('/:id')
    FindOne(@Param('id') id:string){
        return this.service.findOne(id); 
    }
    @Put('/:id')
    Update(@Param('id') id:string, @Body() body: ProductDto){
       return this.service.update(id, body );
    }
    @Delete('/:id')
    Delete(@Param('id') id:string){
        return this.service.delete(id); ; 
    }
    @Post('/Search')
    Search(@Query('key') key){
        return this.service.search(key);;
    }
   



}
