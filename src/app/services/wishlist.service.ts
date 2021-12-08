import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private http : HttpClient
  ) { }

  baseUrl : string = "http://localhost:3000/";

  getAll() : Observable<Wishlist[]>{
    return this.http.get<Wishlist[]>(this.baseUrl+"wishlist");
  }
}
