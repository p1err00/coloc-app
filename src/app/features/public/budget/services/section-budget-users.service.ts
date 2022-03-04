import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Section_budget_users from '../models/section_budget_users.model';

@Injectable({
  providedIn: 'root'
})
export class SectionBudgetUsersService {

  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient

  ) { }
  getAll( id_user : number): Observable<Section_budget_users[]>{
    return this.http.get<Section_budget_users[]>(this.baseUrl+`sectionbudgetuserss/${id_user}`);
  }

  getById(id_hash : number) : Observable<Section_budget_users[]>{
    return this.http.get<Section_budget_users[]>(`${this.baseUrl}sectionbudgetusers/${id_hash}`);
  }

  getByIdColoc(id_coloc : number) : Observable<Section_budget_users[]>{
    return this.http.get<Section_budget_users[]>(`${this.baseUrl}sectionbudgetusers/${id_coloc}`);
  }

  create(data : Section_budget_users) {
    return this.http.post(this.baseUrl+"sectionbudget", data).subscribe(
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

  update(id_hash : number, data : Section_budget_users){
    return this.http.put(`${this.baseUrl}sectionbudget/${id_hash}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}sectionbudget/${id}`).subscribe(
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
