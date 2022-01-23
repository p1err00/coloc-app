import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenements } from '../models/evenements';


@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<Evenements[]>{
    return this.http.get<Evenements[]>(this.baseUrl+"evenements");
  }

  getById(id : number){
    return this.http.get<Evenements[]>(`${this.baseUrl}evenement/${id}`)
  }

  create(data : Evenements){
    return this.http.post<Evenements>(this.baseUrl+'evenements', data).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  update(id : number, data : Evenements){
    return this.http.put(this.baseUrl+`evenements/${id}`, data).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  delete(id : number){
    return this.http.delete(this.baseUrl+`evenements/${id}`).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }
}
