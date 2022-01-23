import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stockage } from '../models/stockage';

@Injectable({
  providedIn: 'root'
})
export class StockageServiceService {

  baseUrl : string = "http://localhost:3000/"

  constructor(
    private http : HttpClient
  ) { }

  getAll(id_user : number) :Observable<Stockage>{
    return this.http.get<Stockage>(`${this.baseUrl}stockage/${id_user}`);
  }
  
  create(data : Stockage){
    return this.http.post(`${this.baseUrl}stockage`, data).subscribe(
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

  update(id : number, data : Stockage){
    return this.http.put(this.baseUrl+`stockage/${id}`, data).subscribe(
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
    return this.http.delete(this.baseUrl+`stockage/${id}`).subscribe(
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
