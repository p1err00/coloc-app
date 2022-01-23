import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stockage_folder } from '../../models/stockage_folder';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {

  baseUrl: string = "http://localhost:3000/";

  constructor(
    private http : HttpClient,
  ) { }

  getAll(id : number): Observable<Stockage_folder[]>{
    return this.http.get<Stockage_folder[]>(`${this.baseUrl}stockage_folders/${id}`);
  }

  getById(id : number): Observable<Stockage_folder>{
    return this.http.get<Stockage_folder>(`${this.baseUrl}stockage_folder/${id}`);
  }

  create(data : Stockage_folder){
    return this.http.post(`${this.baseUrl}stockage_folder`, data).subscribe(
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

  update(id : number, data : Stockage_folder){
    return this.http.put(`${this.baseUrl}stockage_folder/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}stockage_folder/${id}`).subscribe(
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
