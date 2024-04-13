import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service'; // Import the UsersService
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/model/users.models';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService], // Include UsersService here
})
export class UsersModule {}
