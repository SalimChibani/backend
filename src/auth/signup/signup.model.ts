import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import{Document} from 'mongoose'
export class Signup {
    @Prop({unique:true})
    username: String ;
    @Prop({unique:true})
    email: String; 
    @Prop()
    password : String
}
export type SignupModel = Signup & Document 
export const SignupShema = SchemaFactory.createForClass(Signup)