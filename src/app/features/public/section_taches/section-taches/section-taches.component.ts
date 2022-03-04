import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { ModalAddTachesComponent } from 'src/app/shared/modals/modal-add-taches/modal-add-taches.component';
import { Section_tache } from '../models/section_tache.model';
import { Section_tache_item } from '../models/section_tache_item.model';
import { SectionTachesItemService } from '../services/section-taches-item.service';
import { SectionTachesService } from '../services/section-taches.service';
import { AddTachesItemComponent } from '../modals/add-taches-item/add-taches-item.component';
import { SectionTachesUsersService } from '../services/section-taches-users.service';
import { Section_tache_users } from '../models/section_tache_users.model';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { AddTacheSectionModalComponent } from '../modals/add-tache-section-modal/add-tache-section-modal.component';
import { ModifyTachesItemComponent } from '../modals/modify-taches-item/modify-taches-item.component';
import { DeleteTachesItemComponent } from '../modals/delete-taches-item/delete-taches-item.component';
import { AlertService } from 'src/app/services/alert.service';
import { DeleteTacheSectionModalComponent } from '../modals/delete-tache-section-modal/delete-tache-section-modal.component';


@Component({
  selector: 'app-section-taches',
  templateUrl: './section-taches.component.html',
  styleUrls: ['./section-taches.component.scss']
})
export class SectionTachesComponent implements OnInit {

  currentUser !: User;

  listTacheSection: Section_tache[] = [];
  listTacheItem: Section_tache_item[] = [];
  listTacheUsers: Section_tache_users[] = [];

  sectionMap: Map<Section_tache, Section_tache_item[]> = new Map();

  constructor(
    private section_tache_service: SectionTachesService,
    private section_tache_item_service: SectionTachesItemService,
    private section_tache_users_service: SectionTachesUsersService,
    private modalService: NgbModal,
    private _authService: AuthService,
    private alertService: AlertService

  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this._authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;

      this.getAllSectionUserByIdSectionr();

    });
  }

  ngOnInit(): void {

  }

  getAllSectionUserByIdSectionr() {
    this.section_tache_users_service.getAllSectionUserByIdSectionr(this.currentUser.id_user).toPromise().then(resp => {
      this.listTacheUsers = resp;
      for (let user_hash of this.listTacheUsers) {

        this.getAllSectionTacheByHashSection(user_hash.hash_section);
      }
    });
  }

  getAllSectionTacheByHashSection(hash_section: string) {
    this.section_tache_service.getAllByHash(hash_section).toPromise().then(resp => {
      for (let res of resp) {
        this.getAllItemByIdSection(res);
      }
    });
  }
  getAllItemByIdSection(section: Section_tache) {
    this.section_tache_item_service.getAllByIdSection(section.id).subscribe(resp => {
      resp = resp.sort((a, b) => a.nom.toString().localeCompare(b.nom.toString()));

      this.listTacheItem = resp;
      this.sectionMap.set(section, resp);
    });


  }

  // MODALS

  openAddTacheItemModal() {
    const modalRef = this.modalService.open(AddTachesItemComponent, {
      windowClass: 'modalStock'
    });

    for (let section of this.sectionMap.keys()) {
      this.listTacheSection.push(section);
    }

    modalRef.componentInstance.fromParent = this.listTacheSection;

    modalRef.componentInstance.event.subscribe((item: any) => {
      let hash = (+new Date).toString(36);

      let tache: Section_tache_item = {
        id: 0,
        hash_tache: hash,
        nom: item.nom,
        description: item.description,
        date_start: item.date_start,
        date_end: item.date_end,
        is_do: false,
        categorie: item.categorie,
        is_multiple_tache: item.is_multiple_tache,
        id_section: item.id_section
      }

      this.section_tache_item_service.create(tache);

      // TODO Ajouter tache dans map
    });
  }

  openAddTacheSectionModal() {
    const modalRef = this.modalService.open(AddTacheSectionModalComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.fromParent = this.listTacheSection;

    modalRef.componentInstance.event.subscribe((item: any) => {
      let hash = (+new Date).toString(36);

      let section_tache: Section_tache = {
        id: 0,
        nom: item.nom,
        id_coloc: this.currentUser.id_coloc,
        hash_section: hash,
        nb_taches: 0
      }

      let section_tache_user: Section_tache_users = {
        id: 0,
        hash_tache: hash,
        id_user: this.currentUser.id_user,
        hash_section: hash,
        is_do: false,
        date_end: new Date(),
        date_start: new Date()
      }
      this.section_tache_users_service.create(section_tache_user);
      this.section_tache_service.create(section_tache);
    });
  }

  openModifyTacheItemModal(item: Section_tache_item) {
    const modalRef = this.modalService.open(ModifyTachesItemComponent, {
      windowClass: 'modalStock'
    });

    for (let section of this.sectionMap.keys()) {
      this.listTacheSection.push(section);
    }

    modalRef.componentInstance.fromParent = this.listTacheSection;
    modalRef.componentInstance.fromParent_tache = item;

    modalRef.componentInstance.event.subscribe((item: any) => {
      console.log(item);


      let tache: Section_tache_item = {
        id: item.id,
        hash_tache: item.hash_tache,
        nom: item.nom,
        description: item.description,
        date_start: item.date_start,
        date_end: item.date_end,
        is_do: false,
        categorie: item.categorie,
        is_multiple_tache: item.is_multiple_tache,
        id_section: item.id_section
      }

      this.section_tache_item_service.update(tache.id, tache);
    });
  }

  openModifyTacheSectionModal() {

  }

  openDeleteTacheItemModal(tache: Section_tache_item) {
    const modalDelete = this.modalService.open(DeleteTachesItemComponent, {
    });
    modalDelete.componentInstance.fromParent = tache;

    modalDelete.componentInstance.event.subscribe((item: any) => {
      this.section_tache_item_service.delete(item.id);

      this.alertService.showSuccess('Tache', 'Tache supprimé avec succès');
    });
  }

  openDeleteTacheSectionModal(tache: Section_tache) {
    const modalDelete = this.modalService.open(DeleteTacheSectionModalComponent, {
    });
    modalDelete.componentInstance.fromParent = tache;

    modalDelete.componentInstance.event.subscribe((item: any) => {
      this.section_tache_service.delete(item.id);

      this.alertService.showSuccess('Tache', 'Tache supprimé avec succès');
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
