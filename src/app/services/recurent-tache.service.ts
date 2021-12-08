import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurent_Tache } from '../models/recurent_tache';

@Injectable({
  providedIn: 'root'
})
export class RecurentTacheService {
  
  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient
  ) { }

  getAll(id_coloc : number): Observable<Recurent_Tache[]>{
    return this.http.get<Recurent_Tache[]>(this.baseUrl+`recurent_tache/${id_coloc}`);
  }

  create(data : Recurent_Tache) {
    console.log(data);      
    return this.http.post(this.baseUrl+"recurent_tache", data).subscribe(
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

  update(id : number, data : Recurent_Tache){
    return this.http.put(`${this.baseUrl}recurent_tache/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}recurent_tache/${id}`).subscribe(
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
