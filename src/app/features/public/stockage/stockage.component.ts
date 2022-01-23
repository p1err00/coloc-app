import { Component, Input, OnInit } from '@angular/core';
import { FolderServiceService } from './folder/service/folder-service.service';
import { Stockage_folder } from './models/stockage_folder';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddFolderComponent } from './folder/modal/modal-add-folder/modal-add-folder.component';
import { AlertService } from 'src/app/services/alert.service';
import { ModalDeleteFolderComponent } from './folder/modal/modal-delete-folder/modal-delete-folder.component';

@Component({
  selector: 'app-stockage',
  templateUrl: './stockage.component.html',
  styleUrls: ['./stockage.component.scss']
})
export class StockageComponent implements OnInit {



  currentUser !: User;
  @Input() currentFolder: Stockage_folder = {
    id_stockage_folder: 0,
    id_stockage: 0,
    id_user: 0,
    nom: '',
    path: '',
    is_shared: false,
    id_shared: ''
  };

  stockage_folder: Stockage_folder[] = [];

  constructor(
    private stockageFolderService: FolderServiceService,
    private authService: AuthService,
    private modalService : NgbModal,
    private alertService : AlertService
  ) {
    let tokenInfo = this.authService.getDecodedAccessToken();
    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getAllFolder();
  }

  getAllFolder() {
    setTimeout(() => {
      this.stockageFolderService.getAll(this.currentUser.id_user).subscribe(resp => {
        this.stockage_folder = resp;
      });
    }, 200);
  }

  openFolder(folder: any) {
    this.currentFolder = folder;
  }

  createFolder() {
    const modalRef = this.modalService.open(ModalAddFolderComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item: any) => {

      let hashShared : string = '';
      let isPublic : boolean = false;

      if(item.isShared){
        hashShared = (+new Date).toString(36);
        isPublic = true;
      }

      let folder : Stockage_folder = {
        id_stockage_folder : this.currentFolder.id_stockage,
        id_stockage: this.currentFolder.id_stockage,
        id_user: this.currentUser.id_user,
        nom: item.nom,
        path: 'azeaze',
        is_shared: isPublic,
        id_shared: hashShared,
      }

      console.log(folder);
      
      this.stockageFolderService.create(folder);
      this.stockage_folder.push(folder);
      this.alertService.showSuccess(`Dossier ${folder.nom} créé`, 'Evenement créé avec succès');

    });
  }

  deleteFolder(folder : Stockage_folder, e : any){
    e.stopPropagation();
        
    const modalDelete = this.modalService.open(ModalDeleteFolderComponent, {
      windowClass:'modalEvenement'

    });

    modalDelete.componentInstance.fromParent = folder;

    modalDelete.componentInstance.event.subscribe((item : Stockage_folder) => {
      this.stockageFolderService.delete(item.id_stockage_folder);
      this.stockage_folder.splice(this.stockage_folder.indexOf(item), 1);
      this.alertService.showSuccess('Succès', 'Dossier supprimé de la liste');
    });
    
  }
}
