import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
// import { UserAuth } from '../_models/userAuth';
// import { Subject } from 'rxjs';
// import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // user = new Subject<UserAuth>();

  url: string = ' http://localhost:8081/user/';
  constructor(private http: HttpClient) {}
  addservice(object: User) {
    return this.http.post<User>(this.url + 'signup', object);
    // .pipe(tap(data=>{
    //   const expirationDate=new Date(new Date().getTime()+24);
    //   const user = new UserAuth(data.email,expirationDate)
    // }))
  }
}
