import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';

enum LocalTypeEnum {
    كليا = "كليا",
    جزئيا = "جزئيا",
}

enum ExportTypeEnum {
    ملك = "ملك",
    كراء = "كراء", 
}

export type UserDocument = User & Document ; 

@Schema()
export class User {
    @Prop({ required: true })
    SocieteName: string ; 

    @Prop({ required: true })
    AgentName: string; 

    @Prop({ required: true })
    SocieteLocalion: string; 

    @Prop({ required: true })
    LegalForm: string; 

    @Prop({ required: true })
    Activity: string; 

    @Prop({ required: true })
    Products: string;

    @Prop({ required: true })
    WorkshopLocation: string;

    @Prop({ required: true })
    StorageLocation: string;

    @Prop({ required: true })
    PhoneNumber: string;

    @Prop({ required: true })
    Fax: string;

    @Prop({ required: true })
    email: string; 

    @Prop({ required: true })
    NumberOfAdmins: string ; 

    @Prop({ required: true })
    NumberOfWorkers: string ; 

    @Prop({ required: true, enum: ExportTypeEnum })
    ExportType: ExportTypeEnum; 

    @Prop({ required: true, enum: LocalTypeEnum })
    LocalType: LocalTypeEnum;
    @Prop({required:true})
    TaxID: string ;
    @Prop({required:true})
    DiwaniID: string ;
    @Prop({required:true})
    CommercialID: string ;
    @Prop({ required: true })
    username: string;
    @Prop({ required: true })
    password: string;
    async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
    
}

export const UserSchema = SchemaFactory.createForClass(User);
