import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategorytDto } from 'src/dto/category.dto';
@Controller('categories')
export class CategoriesController {
    constructor(private readonly service: CategoriesService){};
    @Post()
    Add(@Body() body:CategorytDto){
        return this.service.Add(body); 
    }
    @Get()
    FindAll(){
        return this.service.FindAll();
    }
    @Get('/:id')
    FindOne(@Param('id') id:string){
        return this.service.FindOne(id); 
    }
    @Put('/:id')
    Update(@Param('id') id:string, @Body() body: CategorytDto){
       return this.service.Update(id, body );
    }
    @Delete('/:id')
    Delete(@Param('id') id:string){
        return this.service.Delete(id); ; 
    }
    @Post('/Search')
    Search(@Query('key') key){
        return this.service.Search(key);;
    }
   

}
