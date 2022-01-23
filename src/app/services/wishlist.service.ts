import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl: string = "http://localhost:3000/";

  getAll(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(this.baseUrl + "wishlist");
  }

  create(data: Wishlist) {
    console.log(data);

    return this.http.post<Wishlist>(`${this.baseUrl}wishlist`, data).subscribe(
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

  update(id: number, data: Wishlist) {
    return this.http.put<Wishlist>(`${this.baseUrl}wishlist/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}wishlist/${id}`).subscribe(
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
