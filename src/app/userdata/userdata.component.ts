import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdata } from '../Model/user.model';
import { UserdataService } from '../Services/userdata.service';
import {HomepageComponent} from '../homepage/homepage.component'

import { Product } from '../Services/product';

import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {


  product:Product;
  id;
  
  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private _productService: ProductService){
  }
 
  /* Using Subscribe */
  
  sub;

  ngOnInit() {

     this.sub=this._Activatedroute.paramMap.subscribe(params => { 
        console.log(params);
         this.id = params.get('id'); 
         let products=this._productService.getProducts();
         this.product=products.find(p => p.productID==this.id);    
     });


    
  }

    /* Using snapshot */

  //  ngOnInit() {
 
  //     //This still works but is deprecated
  //     this.id=this._Activatedroute.snapshot.params['id'];  
 
  //     this.id=this._Activatedroute.snapshot.paramMap.get("id"); 
      
  //     let products=this._productService.getProducts();
  //     this.product=products.find(p => p.productID==this.id);
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this._router.navigate(['product']);
  }

  
}
