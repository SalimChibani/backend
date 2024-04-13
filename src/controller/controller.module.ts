import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControllersService } from './controller.service';
import { CategorySchema } from 'src/model/category.model';
import { CategoriesService } from '../categories/categories.service'; // Correct import path for CategoriesService
import { ControllerController } from './controller.controller';
import { ControllerSchema } from 'src/model/controller.models';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Controller', schema: ControllerSchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  controllers: [ControllerController],
  providers: [ControllersService, CategoriesService], // Include CategoriesService in providers
})
export class ControllersModule {}
