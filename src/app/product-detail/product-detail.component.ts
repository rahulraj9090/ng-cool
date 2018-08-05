import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent{
  
  strId:string= '';
  strName:string= '';
  strImg:string= '';
  strAvl:string= '';
  strPrice:string= '';
  strRating:string= '';
  constructor(private _r :ActivatedRoute) {
     let id = _r.snapshot.params['id']
     console.log('my id is: '+_r.snapshot.params['id']);
     this.strId= id;
  }
}
