import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormulaireController } from './formulaire.controller';
import { FormulaireService } from './formulaire.service';
import { Formulaire, FormulaireSchema } from 'src/model/formulaire.models';

@Module({
    imports: [MongooseModule.forFeature([{ name: Formulaire.name, schema: FormulaireSchema }])],
    controllers: [FormulaireController],
    providers: [FormulaireService],
})
export class FormulaireModule {}