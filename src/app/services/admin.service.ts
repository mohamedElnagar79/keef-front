import { Injectable } from '@angular/core';
import { Admin } from '../_models/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url: string = ' http://localhost:8081/admin';
  constructor(private http: HttpClient) {}
  addservice(object: Admin) {
    return this.http.post<Admin>(this.url, object);
  }
}
