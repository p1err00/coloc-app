import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-stock',
  templateUrl: './modal-stock.component.html',
  styleUrls: ['./modal-stock.component.scss']
})
export class ModalStockComponent implements OnInit {

  @Input() fromParent : any;
  @Output() event = new EventEmitter<any>()


  importance = ["aze", "qsd", "wxc"]

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.fromParent);    
  }
  closeModal(sendData : any) {
    this.activeModal.close(sendData);
  }

    /**
   * 
   * @param id Select item from id and down it importance
   */
     downImportance(elmt : any){
       if(elmt.importance <= 5 && elmt.importance > 0){
          elmt.importance --;
       }
    }
    /**
     * 
     * @param id Select item from id and up it importance
     */
    upImportance(elmt : any){
      if(elmt.importance < 5 && elmt.importance >= 0){
        elmt.importance ++;
      }
    }

    upQuantite(elmt : any){
      if(elmt.quantite_con >= 0){
        elmt.quantite_con ++;
      }
    }
    downQuantite(elmt : any){
      if(elmt.quantite_con > 0){
        elmt.quantite_con --;
      }
    }

    saveNewItem(id :any,name : any, quantite : any, importance : any, category : any){
      
      this.event.emit({
        id_con : id,
        nom_con : name,
        quantite_con : quantite,
        importance : importance,
        categorie : category,
        date_achat_con : '2021-02-16',
        date_peremption_con : '2021-02-16',
      });     
      this.activeModal.close();
    }
}
