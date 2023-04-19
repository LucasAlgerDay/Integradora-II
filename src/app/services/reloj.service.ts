import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timesmodel } from '../models/users/times.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelojService {
  private urlApi = "http://localhost:5000/time"

  constructor(private http: HttpClient) { }

  registro_time(times: timesmodel): Observable<timesmodel>{
    return this.http.post<timesmodel>(this.urlApi, times);
  }
}
