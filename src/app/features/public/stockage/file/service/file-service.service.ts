import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../../models/file';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  baseUrl: string = "http://localhost:3000/";

  constructor(
    private http : HttpClient,
  ) { }

  getAll(id : number, id_stockage : number): Observable<File[]>{
    return this.http.get<File[]>(`${this.baseUrl}files/${id}/${id_stockage}`);
  }

  getById(id : number): Observable<File>{
    return this.http.get<File>(`${this.baseUrl}file/${id}`);
  }

  create(data : File){
    return this.http.post(`${this.baseUrl}file`, data).subscribe(
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

  update(id : number, data : File){
    return this.http.put(`${this.baseUrl}file/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}file/${id}`).subscribe(
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
