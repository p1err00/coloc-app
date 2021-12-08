import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel_user } from '../models/channel_user';

@Injectable({
  providedIn: 'root'
})
export class ChannelUserService {

  baseUrl : string = 'http://localhost:3000/';

  constructor(
    private http : HttpClient
  ) { }

  getAll(id_user : number) : Observable<Channel_user[]>{
    return this.http.get<Channel_user[]>(`${this.baseUrl}channel_user/${id_user}`)
  }

  getById(id_user : number) : Observable<Channel_user[]>{
    return this.http.get<Channel_user[]>(`${this.baseUrl}channel_user/channel/${id_user}`)
  }

  create(data : Channel_user){
    return this.http.post(this.baseUrl+"channel_user", data).subscribe(
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

  update(id_channel : number, data : Channel_user){
    return this.http.put(`${this.baseUrl}channel/${id_channel}`, data).subscribe(
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

  delete(id_channel : number){
    return this.http.delete(`${this.baseUrl}channel/${id_channel}`).subscribe(
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
