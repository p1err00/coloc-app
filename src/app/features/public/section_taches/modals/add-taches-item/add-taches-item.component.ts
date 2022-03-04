import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'src/app/services/alert.service';
import { Section_tache } from '../../models/section_tache.model';
import { SECTION_TACHE_ENUM } from 'src/app/shared/enums/section_tache.enum';

@Component({
  selector: 'app-add-taches-item',
  templateUrl: './add-taches-item.component.html',
  styleUrls: ['./add-taches-item.component.scss']
})
export class AddTachesItemComponent implements OnInit {

  @Output() event = new EventEmitter<any>();
  @Input() fromParent: Section_tache[] = [];


  form: FormGroup;
  section_tache_enum: typeof SECTION_TACHE_ENUM = SECTION_TACHE_ENUM;
  current_categorie: string = '';
  current_section!: number;

  constructor(
    public fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private alertService: AlertService
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      date_start: ['', Validators.required],
      date_end: ['', Validators.required],
      categorie: [''],
      is_multiple_tache: [''],
      id_section: [this.current_section, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.fromParent);

  }


  // Getter form
  get nom() { return this.form.get('nom'); }
  get description() { return this.form.get('description'); }
  get date_start() { return this.form.get('date_start'); }
  get date_end() { return this.form.get('date_end'); }
  get categorie() { return this.form.get('categorie'); }
  get is_multiple_tache() { return this.form.get('is_multiple_tache'); }
  get id_section() { return this.form.get('id_section'); }

  saveModal() {

    if (this.form.valid) {
      this.event.emit({

        nom: this.form.controls['nom'].value,
        description: this.form.controls['description'].value,
        date_start: this.form.controls['date_start'].value,
        date_end: this.form.controls['date_end'].value,
        categorie: this.form.controls['categorie'].value,
        is_multiple_tache: 0,
        id_section: this.form.controls['id_section'].value
      });

      this.activeModal.close();
    } else {
      this.alertService.showError('Erreur', 'Formulaire invalide');
    }
  }

  selectChange(event: any) {
    this.current_categorie = event.target.value;
  }

  selectChangeSection(event: any) {

    this.current_section = event.target.value;
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }
}