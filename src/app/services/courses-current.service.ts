import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseCourante } from '../models/courseCourante';

@Injectable({
  providedIn: 'root'
})
export class CoursesCurrentService {

  baseUrl : string= 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

    getAll(): Observable<CourseCourante[]> {
      return this.http.get<CourseCourante[]>(this.baseUrl+ "coursesCourante");
    }
  
    get(id : number) {
      return this.http.get(`${this.baseUrl}${id}`);
    }
  
    create(data : any) {
      console.log(data);      
      return this.http.post(this.baseUrl+"coursesCourante", data).subscribe(
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
      console.log(data);
      
      return this.http.put(`${this.baseUrl}coursesCourante/${id}`, data).subscribe(
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
      return this.http.delete(`${this.baseUrl}coursesCourante/${id}`).subscribe(
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
