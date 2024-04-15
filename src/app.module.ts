import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { FormulaireModule } from './formulaire/formulaire.module';

@Module({
  imports: [ ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.MONGO_URI) ,
    UsersModule,
    ProductsModule,
    CategoriesModule,
    AuthModule,
    FormulaireModule,
    
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
