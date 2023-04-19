import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { petsmodel } from '../models/users/pets.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroPetService {
  private urlApi = "http://localhost:5000/pets"

  constructor(private http: HttpClient) { }

  registro_pet(pet: petsmodel): Observable<petsmodel>{
    return this.http.post<petsmodel>(this.urlApi, pet);
  }
}
