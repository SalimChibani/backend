import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export class Login {
    @Prop({ unique: true })
    username: string;

    @Prop()
    password: string;
}

export type LoginModel = Login & Document;
export const LoginSchema = SchemaFactory.createForClass(Login);
