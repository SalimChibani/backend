import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginModel } from './login.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
    constructor(
        @InjectModel("Login") private loginModel: Model<LoginModel>
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.loginModel.findOne({ username }).exec();
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
