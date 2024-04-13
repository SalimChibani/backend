import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type CategoryDocument = Category & Document ; 

@Schema()
export class Category {
    @Prop({ required: true })
    CategoryID: string ; 
    @Prop({ required: true })
    CategoryName: string; 
}

export const CategorySchema = SchemaFactory.createForClass(Category);
