import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = ' http://localhost:8081/user';

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<[]>(this.url + 's');
  }
  deleteUserByID(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
}
