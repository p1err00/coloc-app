import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalStockComponent } from '../modals/modal-stock/modal-stock.component';
import { ModalStockDeleteComponent } from '../modals/modal-stock-delete/modal-stock-delete.component';
import { ModalAddStockComponent } from '../modals/modal-add-stock/modal-add-stock.component';
import { Stock } from '../models/stock';
import { Observable } from 'rxjs';
import { ServerStockService } from '../services/server-stock.service';
import { ImportanceService } from '../services/importance.service';
import { CategorieService } from '../services/categorie.service';
import { Importance } from '../models/importance';
import { Categorie } from '../models/categorie';
import { ModalCategorieAddComponent} from '../modals/modal-categorie-add/modal-categorie-add.component'
import { ModalCategorieModifComponent} from '../modals/modal-categorie-modif/modal-categorie-modif.component'
import { ModalImportanceAddComponent} from '../modals/modal-importance-add/modal-importance-add.component'
import { User } from '../models/user';

import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  closeResult = '';

  stocks : Stock[] = [];
  importance : Importance[] = [];
  categorie : Categorie[] = [];

  @Input() fromParent : any;
  currentUser !: User;

  constructor(
    private modalService: NgbModal, 
    private server : ServerStockService,
    private serverImportance : ImportanceService,
    private serverCategorie : CategorieService,
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
    this.getImportance();
    this.getCategorie();
    
  }

  private getStocks() : Observable<Stock[]>{
    this.server.getAll().subscribe(resp => {
      console.log(resp);
      this.stocks = resp;
    });
    return this.server.getAll();
  }

  getImportance(){
    this.serverImportance.getAll().subscribe(resp => {
      console.log(resp);
      this.importance = resp;
    });
  }

  getCategorie(){
    this.serverCategorie.getAll().subscribe(resp => {
      console.log(resp);
      this.categorie = resp;
    });
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
  openModalAddCategorie(){
    const modalAddCategorie = this.modalService.open(ModalCategorieAddComponent, {
      windowClass: 'modalAddCategorie'
    });
    modalAddCategorie.componentInstance.event.subscribe((item : any) =>{

    });
  }

  openModalModifImportance(){
    const modalAddCategorie = this.modalService.open(ModalImportanceAddComponent, {
      windowClass: 'modalAddCategorie'
    });
    modalAddCategorie.componentInstance.event.subscribe((item : any) =>{
      //!Faire la modal et la requete sql
    });
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