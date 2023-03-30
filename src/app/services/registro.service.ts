import { Injectable } from '@angular/core';
import { usersRegister } from '../models/users/usersregister.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Dataregister {
  private urlApi = "http://localhost:5000/register"

  constructor(private http: HttpClient){}

  registeruser(user: usersRegister): Observable<usersRegister>{
    return this.http.post<usersRegister>(this.urlApi, user);
  }


}
