import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Importance } from '../models/importance';

@Injectable({
  providedIn: 'root'
})
export class ImportanceService {

  constructor(private http : HttpClient) { }

  baseUrl : string = "http://localhost:3000/";

  //Get all importances
  getAll(): Observable<Importance[]>{
    return this.http.get<Importance[]>(this.baseUrl+"importance");
  }

  //Get
}
