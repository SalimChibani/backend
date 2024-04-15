// formulaire.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FormulaireService } from './formulaire.service';
import { Formulaire } from 'src/model/formulaire.models';

@Controller('formulaires')
export class FormulaireController {
    constructor(private readonly formulaireService: FormulaireService) {}

    @Post()
    async create(@Body() formulaireData: any): Promise<Formulaire> {
        return await this.formulaireService.add(formulaireData);
    }

    @Get()
    async findAll(): Promise<Formulaire[]> {
        return await this.formulaireService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Formulaire | null> {
        return await this.formulaireService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() formulaireData: any): Promise<Formulaire | null> {
        return await this.formulaireService.update(id, formulaireData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return await this.formulaireService.delete(id);
    }

}
