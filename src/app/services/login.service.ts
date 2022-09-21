import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../_models/login';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url:string= " http://localhost:8081/login"
  constructor(private http:HttpClient) {}
  addservice(object:Login){

    return  this.http.post<Login>(this.url,object)
   }
}
