// formulaire.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Formulaire, FormulaireDocument } from 'src/model/formulaire.models';

@Injectable()
export class FormulaireService {
    constructor(@InjectModel(Formulaire.name) private formulaireModel: Model<FormulaireDocument>) {}

    async add(formulaireData: any): Promise<Formulaire> {
        const formulaire = new this.formulaireModel(formulaireData);
        return await formulaire.save();
    }

    async findAll(): Promise<Formulaire[]> {
        return await this.formulaireModel.find().exec();
    }

    async findOne(id: string): Promise<Formulaire | null> {
        return await this.formulaireModel.findById(id).exec();
    }

    async update(id: string, formulaireData: any): Promise<Formulaire | null> {
        return await this.formulaireModel.findByIdAndUpdate(id, formulaireData, { new: true }).exec();
    }

    async delete(id: string): Promise<any> {
        return await this.formulaireModel.deleteOne({ _id: id }).exec();
    }

}
