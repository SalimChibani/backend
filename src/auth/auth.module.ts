import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module'; 
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
      MongooseModule.forRoot(process.env.MONGO_URI),
        LoginModule, 
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
