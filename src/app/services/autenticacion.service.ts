import { Injectable } from '@angular/core';
import { usersLogin } from '../models/users/users.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  private urlApi = "http://localhost:5000/login"

  constructor(private http: HttpClient){}

  loginuser(user: usersLogin): Observable<usersLogin>{
    return this.http.post<usersLogin>(this.urlApi, user);
  }


}
