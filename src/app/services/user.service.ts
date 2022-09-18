import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  url:string= " http://localhost:8081/user/"
  constructor(private http:HttpClient) {}
  addservice(object:User){

    return  this.http.post<User>(this.url+"signup" ,object)
   }
}
