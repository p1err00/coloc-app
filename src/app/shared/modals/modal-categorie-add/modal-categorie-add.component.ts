import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import { Categorie } from '../../../models/categorie';

@Component({
  selector: 'app-modal-categorie-add',
  templateUrl: './modal-categorie-add.component.html',
  styleUrls: ['./modal-categorie-add.component.scss']
})
export class ModalCategorieAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
