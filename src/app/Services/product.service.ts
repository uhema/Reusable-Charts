import { Injectable } from '@angular/core';
import {Product} from '../Services/product';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProducts() {
 
    let products:Product[];

    products=[
        new Product(1,'Honey',500),
        new Product(2,'Vijji',750),
        new Product(3,'Sandy',100)
    ]

    return products;               
}


public getProduct(id) {
    let products:Product[]=this.getProducts();
    return products.find(p => p.productID==id);
}
}
