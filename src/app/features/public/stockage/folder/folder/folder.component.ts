import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { FileServiceService } from '../../file/service/file-service.service';
import { Stockage_folder } from '../../models/stockage_folder';
import { FolderServiceService } from '../service/folder-service.service';
import { File } from '../../models/file';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  @Input() currentUser !: User;
  @Input() currentFolder !: Stockage_folder;
  @Input() currentFile : File = {
    id_file: 0,
    id_stockage_folder:0,
    nom : '',
    extension : '',
    path : '',
    id_user : 0,
    public : false,
    is_shared : false,
    id_shared : ''
  }
  @Output() event = new EventEmitter<Stockage_folder>();


  folders: Stockage_folder[] = [];
  files: any[] = [];
  filesServer: any[] = [];


  constructor(
    private folderService : FolderServiceService,
    private fileService : FileServiceService
  ) { }

  ngOnInit(): void {
    this.getFolders();
  }

  getFolders(){
    this.folderService.getAll(this.currentUser.id_user).subscribe( resp => {
      this.folders = resp;
    });
    this.getFiles();
  }

  getFiles(){
    this.fileService.getAll(this.currentUser.id_user, this.currentFolder.id_stockage_folder).subscribe( resp => {
      this.filesServer = resp;
    });
  }

  openFile( file :File){
    this.currentFile = file;
    
  }
  
  onSelect(event : any) {
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event : any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  returnStockage(){
    this.event.emit(
      this.currentFolder = {
        id_stockage_folder : 0,
        id_stockage : 0,
        id_user : 0,
        nom : '',
        path : '',
        is_shared : false,
        id_shared : ''
      }
    )
  }

  addFiles(){
    for(let file of this.files){

      let newFile : File = {
        id_file : 0,
        id_stockage_folder : this.currentFolder.id_stockage_folder,
        nom : file.name,
        extension : file.type,
        path : '',
        id_user : this.currentUser.id_user,
        public : false,
        is_shared : false,
        id_shared : ''
      }
      
      this.fileService.create(newFile)
      this.filesServer.push(newFile);
    }
    this.files = [];
  }

  clearFile(file : any){
    this.currentFile = file;
    
  }
}
