import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ControllerDto } from '../dto/controller.dto'; // Correct import path for ControllerDto
import { ControllersService } from './controller.service';

@Controller('controller')
export class ControllerController {
  constructor(private readonly service: ControllersService) {}

  @Post()
  async Add(@Body() body: ControllerDto) {
    return await this.service.add(body); // Ensure await for async operations
  }

  @Get()
  async FindAll() {
    return await this.service.findAll(); // Ensure await for async operations
  }

  @Get('/:id')
  async FindOne(@Param('id') id: string) {
    return await this.service.findOne(id); // Ensure await for async operations
  }

  @Put('/:id')
  async Update(@Param('id') id: string, @Body() body: ControllerDto) {
    return await this.service.update(id, body); // Ensure await for async operations
  }

  @Post('/search')
  async Search(@Query('key') key) {
    return await this.service.search(key); // Ensure await for async operations
  }
}
