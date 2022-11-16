import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../_models/login';
// import { UserAuth } from '../_models/userAuth';
// import { Subject } from 'rxjs';
// import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // user = new Subject<UserAuth>();
  isAuthenticated: boolean = false;
  url: string = ' http://localhost:8081/login';
  constructor(private http: HttpClient) {}
  addservice(object: Login) {
    return this.http.post<Login>(this.url, object);

    // .pipe(tap(data=>{
    //   const expirationDate=new Date(new Date().getTime()+24);
    //   const user = new UserAuth(data.email,expirationDate,token)
    // }))
  }
}
