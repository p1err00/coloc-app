import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalStockComponent } from '../../../shared/modals/modal-stock/modal-stock.component';
import { ModalStockDeleteComponent } from '../../../shared/modals/modal-stock-delete/modal-stock-delete.component';
import { ModalAddStockComponent } from '../../../shared/modals/modal-add-stock/modal-add-stock.component';
import { Stock } from '../../../models/stock';
import { Observable } from 'rxjs';
import { ServerStockService } from '../../../services/server-stock.service';
import { User } from '../../../models/user';
import { Pipe } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  @Pipe({
    name: 'lastname'
  })

  closeResult = '';

  stocks : Stock[] = [];
  

  @Input() fromParent : any;
  currentUser !: User;

  constructor(
    private modalService: NgbModal, 
    private server : ServerStockService,

    private authService: AuthService
    ) { 
      let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      console.log(this.currentUser);
    });
    }

  ngOnInit(): void {
    this.getStocks();
    
  }

  private getStocks() : Observable<Stock[]>{
    this.server.getAll().subscribe(resp => {
      console.log(resp);
      this.stocks = resp;
    });
    return this.server.getAll();
  }

 
  

  //Modal
  openModalModif(product : any){
    const modalRef = this.modalService.open(ModalStockComponent,{
      windowClass : 'modalStock'
    });
    //Send data to child component
    modalRef.componentInstance.fromParent = product;
    
    modalRef.componentInstance.event.subscribe((item : any) => { 
      console.log(item);
      this.server.update(item.id, item)
    });   
  }

  openModalDelete(product : any){
    const modalDel = this.modalService.open(ModalStockDeleteComponent,{
      windowClass : 'modalStockDelete'
    });
    modalDel.componentInstance.fromParent = product;
    
    modalDel.componentInstance.event.subscribe((item : any) =>{
      console.log(item.id_con);
      this.server.delete(item.id_con)
      this.stocks.splice(this.stocks.indexOf(product), 1);
    });
  }

  openModalAdd(){
    const modalAdd = this.modalService.open(ModalAddStockComponent, {
      windowClass : 'modalAddStock'
    });

    modalAdd.componentInstance.event.subscribe((item : any) => {

      let stock = {
        id_con : 0,
        nom_con : item.name,
        quantite_con : item.quantite,
        importance : item.importance,
        categorie : item.categorie,
        date_achat_con : new Date(),
        date_peremption_con : new Date(),
        id_coloc : this.currentUser.id_coloc
      }
      this.stocks.push(stock);
      this.server.create(stock);
    });
    
  }
  
  

  // Sort function

  sortByName() : any[]{
    return this.stocks.sort((a, b) => a.nom_con.localeCompare(b.nom_con));
  }

  sortByImportance(){
    return this.stocks.sort((a, b) => a.importance.localeCompare(b.importance));

  }

  sortByCategorie(){
    return this.stocks.sort((a, b) => a.categorie.localeCompare(b.categorie));

  }

  sortByDatePeremption(){
    return this.stocks.sort((a, b) => a.date_peremption_con.toString().localeCompare(b.date_peremption_con.toString()));

  }

  sortByDateAchat(){
    return this.stocks.sort((a, b) => a.date_achat_con.toString().localeCompare(b.date_achat_con.toString()));

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

}