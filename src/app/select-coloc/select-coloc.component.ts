import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RejoindreColocModalComponent } from '../modals/rejoindre-coloc-modal/rejoindre-coloc-modal.component';

@Component({
  selector: 'app-select-coloc',
  templateUrl: './select-coloc.component.html',
  styleUrls: ['./select-coloc.component.scss']
})
export class SelectColocComponent implements OnInit {

  constructor(
    private modalService: NgbModal, 

  ) { }

  ngOnInit(): void {
  }


  openModalRejoindreColoc(){
    const modaRejoindrecoloc = this.modalService.open(RejoindreColocModalComponent, {
      scrollable: true,
      windowClass: 'modalAddCategorie'
    });
    modaRejoindrecoloc.componentInstance.event.subscribe((item : any) =>{

    });
  }
}
