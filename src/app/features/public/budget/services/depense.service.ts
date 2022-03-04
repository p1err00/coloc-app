import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  baseUrl : string = "http://localhost:3000/";


  constructor(
    private http : HttpClient

  ) { }

  getAll( id_user : number): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.baseUrl+`payments/${id_user}`);
  }

  getById(id_payment : number) : Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}payment/${id_payment}`);
  }

  getNotPayed(id_payment : number) : Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}payment/getNotPayed/${id_payment}`);
  }

  getAlreadyPayed(id_payment : number) : Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}payment/getAlreadyPayed/${id_payment}`);
  }

  getMultiplePayment(id_payment : number) : Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}payment/getMultiplePayment/${id_payment}`);
  }

  create(data : Payment) {
    return this.http.post(this.baseUrl+"payment", data).subscribe(
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

  update(id : number, data : Payment){
    return this.http.put(`${this.baseUrl}payment/${id}`, data).subscribe(
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
    return this.http.delete(`${this.baseUrl}payment/${id}`).subscribe(
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
