import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http : HttpClient) { }

  baseUrl : string = "http://localhost:3000/";

  //Get all categories
  getAll(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.baseUrl+"categorie");
  }

  //Get categorie by id
  getById(id : number) : Observable<Categorie>{
    return this.http.get<Categorie>(this.baseUrl+`categoie/${id}`)
  }

  //Get categories by id coloc
  getByIdColoc(id : number) : Observable<Categorie>{
    return this.http.get<Categorie>(this.baseUrl+`categorie/coloc/${id}`);
  }

  //update categories
  update(id : number, data : Categorie){
    return this.http.put(this.baseUrl+`categorie/${id}`, data);
  }

  updateByIdColoc(id : number, data : Categorie){
    return this.http.put(this.baseUrl+`categorie/coloc/${id}`, data);
  }
  
}
