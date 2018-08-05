import { Component, OnInit, OnChanges } from "@angular/core";
import { IProduct } from "./IProduct";
import { DataService } from "../services/data.service";
import { Pipe, PipeTransform } from '@angular/core';
import {FormsModule} from '@angular/forms'


@Component({
    selector:'prod-list', // Here we define the selector name to use another file
    templateUrl: './product-list.component.html' // This is a HTML file section
})
export class ProductListComponent{
   
    wid:number=50; //Image width
    hit:number=20;  //Image height
    listFilter1:string;
    showImage :boolean = false;

    constructor(private _dataService:DataService){
        console.log('constructor run');
    }

    products : any [] = [   // Here we define the product related data
        {   //First product data
            
            code : 101,
            productImg : 'https://ssli.ebayimg.com/images/g/OLsAAOSwy0JaHufl/s-l640.jpg',
            product: 'Steel Box',
            available : 'Yes',
            price : 3500,
            rating : 3.2
        },
        {  //Second product data
            
            code : 102,
            productImg:'https://images-na.ssl-images-amazon.com/images/I/613ipTGuj7L._SL1500_.jpg',
            product: 'Plastic Box',
            available : 'Yes',
            price : 1500,
            rating : 2.5
        },
        {  // Third product data
            
            code : 103,
            productImg:'https://sc01.alicdn.com/kf/HTB16ALaJVXXXXXWXpXXq6xXFXXXX/metal-file-box.jpg',
            product: 'Metal Box',
            available : 'Yes',
            price : 2500,
            rating : 3.5
        },
        {  // Third product data
            
            code : 104,
            productImg:'https://sc01.alicdn.com/kf/HTB16ALaJVXXXXXWXpXXq6xXFXXXX/metal-file-box.jpg',
            product: 'Paper Box',
            available : 'No',
            price : 200,
            rating : 3
        }
    ]

    getTitle(): string {
        return 'Product List'
    }

    toggleImage():void{
        //showImage :boolean = true;
        this.showImage = !this.showImage;
    }
    
}
// export class ListComponent {
//   listFilter: string = 'Hello';
// }