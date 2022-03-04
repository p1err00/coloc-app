import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section_tache_users } from '../models/section_tache_users.model';

@Injectable({
  providedIn: 'root'
})
export class SectionTachesUsersService {

  baseUrl: string = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }

  getAllSectionUserByIdSectionr(id_user: number) {
    return this.http.get<Section_tache_users[]>(`${this.baseUrl}section_taches_users/getAllByIdUser/${id_user}`);
  }

  create(data: Section_tache_users) {
    return this.http.post(`${this.baseUrl}section_taches_users`, data).subscribe(
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
