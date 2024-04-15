import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsMongoId } from "class-validator";


export type FormulaireDocument = Formulaire  & Document ; 

@Schema()
export class Formulaire  {
    @Prop({ required: true })
    location: string ; 
    @Prop({ required: true, default: Date.now })
    createdAt: Date;
    @Prop({ required: true })
    products: string ; 
    @Prop({ required: true })
    exporter: string ; 
    @Prop({ required: true })
    numFact: string ; 
    @Prop({ required: true, default: Date.now })
    factDate: Date;
    @Prop({ required: true })
    societe: string ;
    @Prop({ required: true })
    societelocation: string ;
    @Prop({ required: true })
    country: string ;
    @Prop({ type: String, required: true })
    @IsMongoId()
    ProductCategory: string; // Reference to CategoryID
    @Prop({ required: true })
    quantity: string ;
    @Prop({ required: true })
    price: string ;
    

}

export const FormulaireSchema = SchemaFactory.createForClass(Formulaire);
