import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Section_budget from '../models/section_budget.model';

@Injectable({
  providedIn: 'root'
})
export class SectionBudgetService {

  baseUrl : string = "http://localhost:3000/";

  constructor(
    private http : HttpClient

  ) { }

  getAll( id_user : number): Observable<Section_budget[]>{
    return this.http.get<Section_budget[]>(this.baseUrl+`sectionbudgets/${id_user}`);
  }

  getById(id : number) : Observable<Section_budget[]>{
    return this.http.get<Section_budget[]>(`${this.baseUrl}sectionbudget/${id}`);
  }

  getByIdColoc(id_coloc : number) : Observable<Section_budget[]>{
    return this.http.get<Section_budget[]>(`${this.baseUrl}sectionbudget/${id_coloc}`);
  }

  getByCategorie(categorie : number) : Observable<Section_budget[]>{
    return this.http.get<Section_budget[]>(`${this.baseUrl}sectionbudget/${categorie}`);
  }

  create(data : Section_budget) {
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

  update(id : number, data : Section_budget){
    return this.http.put(`${this.baseUrl}sectionbudget/${id}`, data).subscribe(
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
