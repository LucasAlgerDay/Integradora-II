import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hours_saved } from '../models/users/hours-saved.models';

@Injectable({
  providedIn: 'root'
})
export class HorasGuardadasService {
  private urlApi = "http://localhost:5000/hours_saved"

  constructor(private http: HttpClient) { }

  pets_saved(userId: hours_saved): Observable<hours_saved>{
    return this.http.post<hours_saved>(this.urlApi, userId);
  }
}