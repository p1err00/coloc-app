import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section_tache_item } from '../models/section_tache_item.model';

@Injectable({
  providedIn: 'root'
})
export class SectionTachesItemService {

  baseUrl: string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllByIdSection(id_section: number) {
    return this.http.get<Section_tache_item[]>(`${this.baseUrl}section_taches_item/getAllByIdSection/${id_section}`);
  }

  create(data: Section_tache_item) {
    return this.http.post(`${this.baseUrl}section_taches_item`, data).subscribe(
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

  update(id_tache: number, data: Section_tache_item) {
    return this.http.put(`${this.baseUrl}section_taches_item/${id_tache}`, data).subscribe(
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

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}section_taches_item/${id}`).subscribe(
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
