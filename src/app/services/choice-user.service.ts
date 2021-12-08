import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Choice_user } from '../models/choice_user';

@Injectable({
  providedIn: 'root'
})
export class ChoiceUserService {
  
  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<Choice_user[]>{
    return this.http.get<Choice_user[]>(this.baseUrl+"Choice_user");
  }

  getById(id : number) : Observable<Choice_user[]>{
    return this.http.get<Choice_user[]>(`${this.baseUrl}Choice_user/${id}`);
  }

  create(data : any) {
    console.log(data);      
    return this.http.post(this.baseUrl+"Choice_user", data).subscribe(
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
    return this.http.put(`${this.baseUrl}Choice_user/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}Choice_user/${id}`).subscribe(
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
