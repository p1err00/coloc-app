import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Abonnement } from '../models/abonnement.model';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient

  ) { }

  getAll( id_user : number): Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>(this.baseUrl+`abonnements/${id_user}`);
  }

  getById(id_abonnement : number) : Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>(`${this.baseUrl}abonnement/${id_abonnement}`);
  }

  getNotPayed(id_abonnement : number) : Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>(`${this.baseUrl}abonnement/getNotPayed/${id_abonnement}`);
  }

  getAlreadyPayed(id_abonnement : number) : Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>(`${this.baseUrl}abonnement/getAlreadyPayed/${id_abonnement}`);
  }

  getMultipleAbonnement(id_abonnement : number) : Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>(`${this.baseUrl}abonnement/getMultipleAbonnement/${id_abonnement}`);
  }

  create(data : Abonnement) {
    return this.http.post(this.baseUrl+"abonnement", data).subscribe(
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

  update(id : number, data : Abonnement){
    return this.http.put(`${this.baseUrl}abonnement/${id}`, data).subscribe(
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

  delete(id : string, id_user : number){
    return this.http.delete(`${this.baseUrl}abonnement/${id}`).subscribe(
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
