import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shared } from '../models/shared';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  baseUrl : string = "http://localhost:3000/"

  constructor(
    private http : HttpClient
  ) { }

    getAll(id : string): Observable<Shared[]>{
      return this.http.get<Shared[]>(`${this.baseUrl}shared/${id}`);
    }

    create(data : Shared) {
      return this.http.post(`${this.baseUrl}shared`, data).subscribe(
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

    update(id : number, data : Shared){
      return this.http.put(`${this.baseUrl}shared/${id}`, data).subscribe(
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
      return this.http.delete(`${this.baseUrl}shared/${id}`).subscribe(
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
