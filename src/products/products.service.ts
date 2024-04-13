import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CategoriesService } from "src/categories/categories.service";
import { ProductDto } from "src/dto/Product.dto";
import { Product, ProductDocument } from "src/model/Products.models";

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
        private readonly categoriesService: CategoriesService // Corrected the service name to follow conventional naming
    ){}

    async add(body: ProductDto){
        // Check if the provided category exists
        const categoryExists = await this.categoriesService.exists(body.ProductCategory); // Assuming body.ProductCategory is the CategoryID
        if (!categoryExists) {
            throw new BadRequestException('Invalid category');
        }
        return this.productModel.create(body); 
    }

    findAll(){
        return this.productModel.find(); 
    }

    findOne(id :string){
        return this.productModel.findOne({_id: id}); 
    }

    update(id: string, body:ProductDto){
        return this.productModel.findByIdAndUpdate(
            {_id: id},
            {$set: body },
            { new: true },
        ); 
    }

    delete(id: string): Promise<any> {
        return this.productModel.deleteOne({ _id: id });
    }

    search(key: string){
        const keyword = key ? {
            $or: [
                {ProductID: {$regex: key, $options: 'i'}},
                {ProductName: {$regex: key, $options: 'i'}},
            ],
        } : {} ; 
        return this.productModel.find(keyword); 
    }
}
