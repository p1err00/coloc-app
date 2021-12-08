import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colocation } from '../models/colocation';

@Injectable({
  providedIn: 'root'
})
export class ColocationService {

  constructor(
    private http : HttpClient
  ) { }

  baseUrl : string = "http://localhost:3000/"

  getAll(): Observable<Colocation[]>{
    return this.http.get<Colocation[]>(this.baseUrl+"colocation");
  }

  getById(id : number) : Observable<Colocation>{
    return this.http.get<Colocation>(this.baseUrl+`colocation/${id}`)
  }

  update(id : number, data : any){
    return this.http.put(this.baseUrl+`colocation/${id}`, data).subscribe(
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
