import { Component } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
    selector:'prod-list', // Here we define the selector name to use another file
    templateUrl: './product-list.component.html' // This is a HTML file section
})
export class ProductListComponent{
   
    wid:number=100; //Image width
    hit:number=70;  //Image height
    showImage: boolean = false;

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

    toggleImage() : void {
        this.showImage = !this.showImage;
    }
}