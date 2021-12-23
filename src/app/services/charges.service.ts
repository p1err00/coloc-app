import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Charges } from '../models/charges';

@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  baseUrl : string= 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

    //Get all charges
    getAll(id_user : number): Observable<Charges[]> {
      return this.http.get<Charges[]>(`${this.baseUrl}charges/${id_user}`);
    }
    
    //Get charge by id
    getById(id : number) : Observable<Charges[]> {
      return this.http.get<Charges[]>(`${this.baseUrl}charges/${id}`);
    }
  
    //Get charges by id user
    getByIdUser(id : number) : Observable<Charges> {
      return this.http.get<Charges>(this.baseUrl+`charges/user/${id}`);
    }

    //Post charge
    create(data : any) {
      console.log(data);      
      return this.http.post(this.baseUrl+"charges", data).subscribe(
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
  
    //Update charge by id
    update(id : string, data : any){
      
      return this.http.put(`${this.baseUrl}charges/${id}`, data).subscribe(
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

    //Delete charge by id
    delete(id : number){
      return this.http.delete(`${this.baseUrl}charges/${id}`).subscribe(
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
