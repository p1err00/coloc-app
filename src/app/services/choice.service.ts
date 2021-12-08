import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Choice } from '../models/choice';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient

  ) { }

  getAll(id_vote : string): Observable<Choice[]>{
    return this.http.get<Choice[]>(this.baseUrl+`choice/${id_vote}`);
  }

  getById(id : number) : Observable<Choice[]>{
    return this.http.get<Choice[]>(`${this.baseUrl}choice/${id}`);
  }

  create(data : any) {
    console.log(data);      
    return this.http.post(this.baseUrl+"choice", data).subscribe(
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

  update(id : number, data : any){
    return this.http.put(`${this.baseUrl}choice/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}choice/${id}`).subscribe(
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
