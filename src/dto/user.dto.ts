import { IsEmail, IsEnum, IsNotEmpty,IsNumber,IsString } from "class-validator";
enum LocalTypeEnum {
    كليا = "كليا",
    جزئيا = "جزئيا",
}
enum ExportTypeEnum{
    ملك = "ملك",
    كراء = "كراء", 
}
export class UserDto {
    @IsNotEmpty() @IsString()
    SocieteName: string ; 
    @IsNotEmpty() @IsString()
    AgentName: string; zz
    @IsNotEmpty() @IsString()
    SocieteLocalion: string; 
    @IsNotEmpty() @IsString()
    LegalForm: string; 
    @IsNotEmpty() @IsString()
    Activity: string; 
    @IsNotEmpty() @IsString()
    Products: string;
    @IsNotEmpty()@IsString()
    WorkshopLocation: string;
    @IsNotEmpty() @IsString()
    StorageLocation: string;
    @IsNotEmpty() @IsString()
    PhoneNumber: string;
    @IsNotEmpty() @IsString()
    Fax: string;
    @IsNotEmpty() @IsEmail()
    email: string; 
    @IsNotEmpty() @IsNumber()
    NumberOfAdmins: Number ; 
    @IsNotEmpty() @IsNumber()
    NumberOfWorkers: number ; 
    @IsNotEmpty()
    @IsEnum(ExportTypeEnum)
    ExportType: string; 
    @IsNotEmpty()
    @IsEnum(LocalTypeEnum)
    LocalType: LocalTypeEnum;
    @IsNotEmpty() @IsString()
    TaxID: string ;
    @IsNotEmpty() @IsString()
    DiwaniID: string ;
    @IsNotEmpty() @IsString()
    CommercialID: string ;
}