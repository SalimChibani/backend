import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from 'src/model/Products.models';
import { CategorySchema } from 'src/model/category.model';
import { CategoriesService } from 'src/categories/categories.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Product', schema: ProductSchema },
      { name: 'Category', schema: CategorySchema }, // Import Category schema
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CategoriesService], // Include CategoriesService in providers
})
export class ProductsModule {}
