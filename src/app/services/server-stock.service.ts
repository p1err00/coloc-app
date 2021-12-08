import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class ServerStockService {

  baseUrl : string= 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl+ "stock");
  }

  get(id : number) {
    return this.http.get(`${this.baseUrl}stock/${id}`);
  }

  create(data : any) {
    console.log("Requete envoyé");      
    return this.http.post(this.baseUrl+"stock", data).subscribe(
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

  update(id : number, data : any) {    
    return this.http.put(`${this.baseUrl}stock/${id}`, data).subscribe(
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
    console.log(id);
    return this.http.delete(`${this.baseUrl}stock/${id}`).subscribe(
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

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(name : string): Observable<any> {
    return this.http.get(`${this.baseUrl}?title=${name}`);
  }
}
