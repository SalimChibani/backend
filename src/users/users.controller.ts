import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService){};
    @Post()
    Add(@Body() body:UserDto){
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
    Update(@Param('id') id:string, @Body() body: UserDto){
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
