import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Vote from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  baseUrl : string = "http://localhost:3000/";


  constructor(
    private http : HttpClient

  ) { }

  getAll(id : number): Observable<Vote[]>{
    return this.http.get<Vote[]>(this.baseUrl+`vote/${id}`);
  }

  getById(id : number) : Observable<Vote[]>{
    return this.http.get<Vote[]>(`${this.baseUrl}vote/${id}`);
  }

  create(data : any) {
    console.log(data);      
    return this.http.post(this.baseUrl+"vote", data).subscribe(
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
    return this.http.put(`${this.baseUrl}vote/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}vote/${id}`).subscribe(
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
