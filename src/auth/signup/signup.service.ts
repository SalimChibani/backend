import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupModel } from './signup.model';
import * as bcrypt from 'bcrypt'; 

interface User {
    username: string;
    email: string;
    password: string;
}

@Injectable()
export class SignupService {
    constructor(
        @InjectModel("Signup") private signupModel: Model<SignupModel>
    ) {}

    async signup(user: User) {
        console.log("Received user:", user);

        if (!user.password) {
            console.error("Password is missing in user object.");
            return; // or throw an error
        }

        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            console.log("Hashed password:", hashedPassword);
            
            const newUser = new this.signupModel({
                username: user.username, 
                email: user.email,
                password: hashedPassword
            });

            await newUser.save();
        } catch (error) {
            console.error("Error occurred during signup:", error);
        }
    }
}
