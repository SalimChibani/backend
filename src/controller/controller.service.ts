import { Injectable, BadRequestException, Controller } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CategoriesService } from "src/categories/categories.service";
import { ControllerDto } from "src/dto/Controller.dto";
import { ControllerDocument } from "src/model/controller.models";

@Injectable()
export class ControllersService {
    constructor(
        @InjectModel(Controller.name) private ControllerModel: Model<ControllerDocument>,
        private readonly categoriesService: CategoriesService // Corrected the service name to follow conventional naming
    ){}

    async add(body: ControllerDto){
        // Check if the provided category exists
        const categoryExists = await this.categoriesService.exists(body.ProductCategory); 
        if (!categoryExists) {
            throw new BadRequestException('Invalid category');
        }
        return this.ControllerModel.create(body); 
    }

    findAll(){
        return this.ControllerModel.find(); 
    }

    findOne(id :string){
        return this.ControllerModel.findOne({_id: id}); 
    }

    update(id: string, body:ControllerDto){
        return this.ControllerModel.findByIdAndUpdate(
            {_id: id},
            {$set: body },
            { new: true },
        ); 
    }

    delete(id: string): Promise<any> {
        return this.ControllerModel.deleteOne({ _id: id });
    }

    search(key: string){
        const keyword = key ? {
          
            
        } : {} ; 
        return this.ControllerModel.find(keyword); 
    }
}
