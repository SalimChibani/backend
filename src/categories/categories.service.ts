import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategorytDto } from 'src/dto/category.dto';
import { Category, CategoryDocument } from 'src/model/category.model';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category.name) private categorymodel: Model<CategoryDocument>){}

    async exists(categoryId: string): Promise<boolean> {
        const category = await this.categorymodel.findOne({ CategoryID: categoryId }).exec();
        return !!category;
    }

    Add(body: CategorytDto){
        return this.categorymodel.create(body); 
    }

    FindAll(){
        return this.categorymodel.find(); 
    }

    FindOne(id :string){
        return this.categorymodel.findOne({ CategoryID: id }); 
    }

    Update(id: string, body:CategorytDto){
        return this.categorymodel.findByIdAndUpdate(
            { CategoryID: id },
            {$set: body },
            { new: true },
        ); 
    }

    Delete(id: string): Promise<any> {
        return this.categorymodel.deleteOne({ CategoryID: id });
    }

    Search(key: string){
        const keyword = key ? {
            $or: [
                {CategoryID: {$regex: key, $options: 'i'}},
                {CategoryName: {$regex: key, $options: 'i'}},
            ],
        } : {} ; 
        return this.categorymodel.find(keyword) ; 
    }
}
