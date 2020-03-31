import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor( private httpclient: HttpClient) { }

  getData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.httpclient.get(url);
  }

  // postData(data){
  //   const url = "https://jsonplaceholder.typicode.com/users" ;
  //   return this.httpclient.post(url, data)
  // }

  getdetails() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    return this.httpclient.get(url);
  }



  
}
