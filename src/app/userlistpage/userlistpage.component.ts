import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Services/product';



@Component({
  selector: 'app-userlistpage',
  templateUrl: './userlistpage.component.html',
  styleUrls: ['./userlistpage.component.css']
})
export class UserlistpageComponent implements OnInit {

  
  products: Product[];
   
  constructor(private productService: ProductService){
  }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
