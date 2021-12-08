import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  baseUrl : string= 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

    getAll(): Observable<Course[]> {
      return this.http.get<Course[]>(this.baseUrl+ "courses");
    }
  
    get(id : number) {
      return this.http.get(`${this.baseUrl}${id}`);
    }
  
    create(data : any) {
      console.log(data);      
      return this.http.post(this.baseUrl+"courses", data).subscribe(
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
  
    update(id : string, data : any){
      return this.http.put(`${this.baseUrl}courses/${id}`, data).subscribe(
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
      return this.http.delete(`${this.baseUrl}courses/${id}`).subscribe(
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
}
