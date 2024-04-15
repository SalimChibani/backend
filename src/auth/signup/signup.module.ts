import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupShema } from './signup.model';

@Module({
    imports:[
MongooseModule.forFeature([ 
    {
        name:"Signup", 
        schema: SignupShema
    }]
)
    ], 
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
