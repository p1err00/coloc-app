import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  baseUrl : string = 'http://localhost:3000/';

  constructor(
    private http : HttpClient
  ) { }

  getSend(id_user : number) : Observable<Channel[]>{
    return this.http.get<Channel[]>(`${this.baseUrl}channel/send/${id_user}`)
  }

  getReceived(id_user : number) : Observable<Channel[]>{
    return this.http.get<Channel[]>(`${this.baseUrl}channel/received/${id_user}`)
  }

  create(data : Channel){
    return this.http.post(this.baseUrl+"channel", data).subscribe(
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

  update(id_channel : number, data : Channel){
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
