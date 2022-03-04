import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section_tache } from '../models/section_tache.model';


@Injectable({
  providedIn: 'root'
})
export class SectionTachesService {

  baseUrl: string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllByIdUser(id_user: number) {
    return this.http.get<Section_tache[]>(`${this.baseUrl}section_taches/getAllByIdUser/${id_user}`);
  }

  getAllByHash(hash: string) {
    return this.http.get<Section_tache[]>(`${this.baseUrl}section_taches/getAllByHash/${hash}`);
  }

  update(id: number, data: Section_tache) {
    return this.http.put(`${this.baseUrl}section_taches/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}section_taches/${id}`).subscribe(
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

  create(data: Section_tache) {
    return this.http.post(`${this.baseUrl}section_taches`, data).subscribe(
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
