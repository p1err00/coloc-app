import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Extra } from '../models/extras';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  baseUrl : string= 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

    //Get all extras
    getAll(id : number): Observable<Extra[]> {
      return this.http.get<Extra[]>(this.baseUrl+ "extras/"+id);
    }
  
    //Get extra by id
    getById(id : number) {
      return this.http.get(`${this.baseUrl}${id}`);
    }
  
    //Get extra by id user
    getByIdUser(id : number){
      return this.http.get(this.baseUrl+`/extras/user/${id}`);
    }

    //Create extra
    create(data : any) {
      console.log(data);      
      return this.http.post(this.baseUrl+"extras", data).subscribe(
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
  
    //Update extra
    update(id : number, data : any){
      console.log(data);
      
      return this.http.put(`${this.baseUrl}extras/${id}`, data).subscribe(
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
    
    //Delete extra
    delete(id : number){
      return this.http.delete(`${this.baseUrl}extras/${id}`).subscribe(
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
  
    //Delete all extras
    deleteAll() {
      return this.http.delete(this.baseUrl).subscribe(
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

    //Delete all extras by user id
    deleteAllById(id : number){
      return this.http.delete(this.baseUrl+`extras/user/${id}`);
    }
}
