import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenements } from '../models/evenements';


@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  constructor(
    private http : HttpClient
  ) { }

  baseUrl : string = "http://localhost:3000/";

  getAll(): Observable<Evenements[]>{
    return this.http.get<Evenements[]>(this.baseUrl+"evenements");
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
