import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { ImportanceService } from '../../../services/importance.service';
import { CategorieService } from '../../../services/categorie.service';
import { Importance } from '../../../models/importance';
import { Categorie } from '../../../models/categorie';

@Component({
  selector: 'app-modal-add-stock',
  templateUrl: './modal-add-stock.component.html',
  styleUrls: ['./modal-add-stock.component.scss']
})
export class ModalAddStockComponent implements OnInit {

  @Output() event = new EventEmitter<any>();

  importance : Importance[] = [];
  categorie : Categorie[] = [];

  constructor(public activeModal : NgbActiveModal, 
    private serverImportance : ImportanceService,
    private serverCategorie : CategorieService) { }

  ngOnInit(): void {
    this.getImportance();
    this.getCategorie();
  }

  getImportance(){
    this.serverImportance.getAll().subscribe(resp => {
      console.log(resp);
      this.importance = resp;
    })
  }

  getCategorie(){
    this.serverCategorie.getAll().subscribe(resp => {
      console.log(resp);
      this.categorie = resp;
    })
  }

  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }
  saveModal(name : string, quantity : string, importance : string, category : string){
    this.event.emit({
      id : 6,
      name : name,
      quantite : quantity,
      importance : importance,
      categorie : category});
      this.activeModal.close();
  }
}
