import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Taches } from '../models/taches';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  baseUrl : string = "http://localhost:3000/";
  
  constructor(
    private http : HttpClient
  ) { }


  getAll(): Observable<Taches[]>{
    return this.http.get<Taches[]>(this.baseUrl+"taches");
  }

  getByUser(username : string) : Observable<Taches[]>{
    return this.http.get<Taches[]>(`${this.baseUrl}taches/user/${username}`);
  }

  create(data : any) {
    console.log(data);      
    return this.http.post(this.baseUrl+"taches", data).subscribe(
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
    return this.http.put(`${this.baseUrl}taches/${id}`, data).subscribe(
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

  updateByName(id : string, data : any){
    return this.http.put(`${this.baseUrl}taches/name/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}taches/${id}`).subscribe(
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
