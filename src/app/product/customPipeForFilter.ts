import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "./IProduct";



@Pipe({
    name: 'productFilterPipe'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], filterBy: string) : IProduct[]{
        //return;

         filterBy = filterBy? filterBy.toLowerCase(): null;

         return filterBy? value.filter(
         	(product: IProduct)=> product.productName.toLowerCase().
        	 indexOf(filterBy)!== -1): value;
    }
    
}  