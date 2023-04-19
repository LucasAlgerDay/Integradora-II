import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pets_saved } from '../models/users/pets-saved.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsSavedService {
  private urlApi = "http://localhost:5000/pets_saved"

  constructor(private http: HttpClient) { }

  pets_saved(userId: pets_saved): Observable<pets_saved>{
    return this.http.post<pets_saved>(this.urlApi, userId);
  }
}
