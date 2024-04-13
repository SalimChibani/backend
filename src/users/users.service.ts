import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/dto/user.dto";
import { User, UserDocument } from "src/model/users.models";
@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private usermodel: Model<UserDocument>){}
    Add(body: UserDto){
        return this.usermodel.create(body); 
    }
    FindAll(){
        return this.usermodel.find(); 
    }
    FindOne(id :string){
        return this.usermodel.findOne({_id: id}); 
    }
    Update(id: string, body:UserDto){
        return this.usermodel.findByIdAndUpdate(
            {_id: id},
            {$set: body },
            { new: true },
            ); 
    }
     Delete(id: string): Promise<any> {
        return this.usermodel.deleteOne({ _id: id });
      }
    Search(key: string){
        const keyword = key ? {
            $or: [{fullname: {$regex: key, $options: 'i'}},
            {email: {$regex: key, $options: 'i'}},],
        } : {} ; 
        return this.usermodel.find(keyword) ; 
    }
}
