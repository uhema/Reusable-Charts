import { Component, OnInit } from '@angular/core';
import { Userdata } from '../Model/user.model';
import { UserdataService } from '../Services/userdata.service';
// import { ListService } from '../Services/list.service';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
userData  : Userdata[];


  constructor( private _userdataservice: UserdataService, private httpClient: HttpClient
    ,private router: Router ) { }


  ngOnInit() {

    this._userdataservice.getData().subscribe((data: Userdata[]) =>{
      this.userData = data;
    });   

    // this._userlist.getuserlist().subscribe((data: Userdata[]) =>{
    //   this.userlist = data;
    // }

    // ) 

    
  }
  getuserlist(){
      console.log("hello");
      this.router.navigate(['home-page/userdata']);
      this._userdataservice.getData().subscribe((data: Userdata[]) =>{
        this.userData = data;
        console.log( this.userData)
      }); 
  }
  


 
 
}
