import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categorie } from 'src/app/models/categorie';
import { Importance } from 'src/app/models/importance';
import { CategorieService } from 'src/app/services/categorie.service';
import { ImportanceService } from 'src/app/services/importance.service';
import { ModalCategorieAddComponent } from '../../modals/modal-categorie-add/modal-categorie-add.component';
import { ModalImportanceAddComponent } from '../../modals/modal-importance-add/modal-importance-add.component';

@Component({
  selector: 'app-stock-aside',
  templateUrl: './stock-aside.component.html',
  styleUrls: ['./stock-aside.component.scss']
})
export class StockAsideComponent implements OnInit {

  importance : Importance[] = [];
  categorie : Categorie[] = [];

  constructor(
    private modalService: NgbModal, 
    private serverImportance : ImportanceService,
    private serverCategorie : CategorieService,
  ) { }

  ngOnInit(): void {
    this.getImportance();
    this.getCategorie();
    
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

}
