import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';
import { UserDto } from "src/dto/user.dto";
import { User, UserDocument } from "src/model/users.models";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async Add(body: UserDto): Promise<UserDocument> {
        return await this.userModel.create(body);
    }

    async FindAll(): Promise<UserDocument[]> {
        return await this.userModel.find().exec();
    }

    async FindOne(id: string): Promise<UserDocument | null> {
        return await this.userModel.findById(id).exec();
    }

    async Update(id: string, body: UserDto): Promise<UserDocument | null> {
        return await this.userModel.findByIdAndUpdate(id, body, { new: true }).exec();
    }

    async Delete(id: string): Promise<any> {
        return await this.userModel.deleteOne({ _id: id }).exec();
    }

    async Search(key: string): Promise<UserDocument[]> {
        const keyword = key ? {
            $or: [
                { fullname: { $regex: key, $options: 'i' } },
                { email: { $regex: key, $options: 'i' } },
            ],
        } : {};
        return await this.userModel.find(keyword).exec();
    }

    async findByUsername(username: string): Promise<UserDocument | null> {
        return await this.userModel.findOne({ username }).exec();
    }

    async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }
}
