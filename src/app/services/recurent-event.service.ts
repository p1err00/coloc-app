import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurent_event } from '../models/recurent_event';

@Injectable({
  providedIn: 'root'
})
export class RecurentEventService {

  baseUrl : string = "http://localhost:3000/";


  constructor(
    private http : HttpClient

  ) { }

  getAll(id_coloc : number): Observable<Recurent_event[]>{
    return this.http.get<Recurent_event[]>(this.baseUrl+`Recurent_event/${id_coloc}`);
  }

  create(data : Recurent_event) {
    console.log(data);      
    return this.http.post(this.baseUrl+"Recurent_event", data).subscribe(
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

  update(id : number, data : Recurent_event){
    return this.http.put(`${this.baseUrl}Recurent_event/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}Recurent_event/${id}`).subscribe(
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
