import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sites } from '../models/sites';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(
    private http : HttpClient
  ) { }

  baseUrl : string = "http://localhost:3000/";

  getAll() : Observable<Sites[]>{
    return this.http.get<Sites[]>(this.baseUrl+"site");
  }
}
