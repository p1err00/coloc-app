import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Taches } from 'src/app/models/taches';
import { AlertService } from 'src/app/services/alert.service';
import { Section_tache } from '../../models/section_tache.model';
import { Section_tache_item } from '../../models/section_tache_item.model';

@Component({
  selector: 'app-modify-taches-item',
  templateUrl: './modify-taches-item.component.html',
  styleUrls: ['./modify-taches-item.component.scss']
})
export class ModifyTachesItemComponent implements OnInit {

  @Input() fromParent_tache !: Section_tache_item;
  @Input() fromParent: Section_tache[] = [];

  // @Input() users: User[] = [];

  @Output() event = new EventEmitter<any>();

  form: FormGroup;
  current_categorie: string = '';
  current_section!: number;

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private alertService: AlertService) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      date_start: ['', Validators.required],
      date_end: ['', Validators.required],
      categorie: [''],
      is_multiple_tache: [''],
      id_section: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // Getter form
  get nom() { return this.form.get('nom'); }
  get description() { return this.form.get('description'); }
  get date_start() { return this.form.get('date_start'); }
  get date_end() { return this.form.get('date_end'); }
  get categorie() { return this.form.get('categorie'); }
  get is_multiple_tache() { return this.form.get('is_multiple_tache'); }
  get id_section() { return this.form.get('id_section'); }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

  selectChange(event: any) {
    this.current_categorie = event.target.value;
  }

  selectChangeSection(event: any) {
    this.current_section = event.target.value;
  }

  saveModal() {
    if (this.form.valid) {

      this.event.emit({
        id: this.fromParent_tache.id,
        nom: this.form.controls['nom'].value,
        description: this.form.controls['description'].value,
        date_start: this.form.controls['date_start'].value,
        date_end: this.form.controls['date_end'].value,
        categorie: this.form.controls['categorie'].value,
        is_multiple_tache: 0,
        hash_tache: this.fromParent_tache.hash_tache,
        id_section: this.form.controls['id_section'].value
      });

      this.activeModal.close();

    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }
}
