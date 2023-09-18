import { Component } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hooksConcept';
  nam:string="";
  productName:string="";
  productPrice:any;

  Products:products = new products();
 
  name(event:any){
    this.nam = event.target.value;
  }

  Update(){
    this.Products = new products();
    this.Products.productName = this.productName;
    this.Products.productPrice = this.productPrice;
  }

}
