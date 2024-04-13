import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({ required: true })
    ProductID: string;

    @Prop({ required: true })
    ProductName: string;

    @Prop({ type: String, required: true })
    @IsMongoId()
    ProductCategory: string; // Reference to CategoryID
}

export const ProductSchema = SchemaFactory.createForClass(Product);
