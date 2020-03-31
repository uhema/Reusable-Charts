import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private httpclient: HttpClient) { }
  
  getuserlist() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    return this.httpclient.get(url);
  }
}
