import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  baseUrl : string = 'http://localhost:3000/';


  constructor(
    private http : HttpClient
  ) { }

 
  getAll(id_channel : string) : Observable<Message[]>{
    return this.http.get<Message[]>(`${this.baseUrl}message/${id_channel}`);
  }

  create(data : Message){
    return this.http.post(this.baseUrl+"message", data).subscribe(
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

  update(id_message : number, data : Message){
    return this.http.put(`${this.baseUrl}message/${id_message}`, data).subscribe(
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

  delete(id_message : number){
    return this.http.delete(`${this.baseUrl}message/${id_message}`).subscribe(
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
