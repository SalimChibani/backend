import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module'; // Import LoginModule here
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
      MongooseModule.forRoot(process.env.MONGO_URI),
        LoginModule, // Include LoginModule here
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
