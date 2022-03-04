import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { File } from '../../models/file';
import { Shared } from '../../models/shared';
import { SharedServiceService } from '../../service/shared-service.service';
import { FileServiceService } from '../service/file-service.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit, AfterContentInit {

  @Output() event = new EventEmitter<any>();
  @Input() currentFile !: File;
  @Input() currentUser !: User;

  fileToClear : File = {
    id_file : 0,
    id_stockage_folder : 0,
    nom : '',
    extension : '',
    path : '',
    id_user : 0,
    public : false,
    is_shared : false,
    id_shared :''
  }

  @Input() users : User[] = [];
  IdUserShared : number[] = [];
  usersShared : User[] = [];
  selectUsersToShared : boolean = false;
  hash : string = (+new Date).toString(36);

  constructor(
    private authService : AuthService,
    private fileService : FileServiceService,
    private sharedService : SharedServiceService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  ngAfterContentInit(): void {
    
    this.getIdUserShared();
    this.clearUsers();
  }

  getUsers(){
    this.authService.getAll().subscribe( resp => {
      this.users = resp;
    });
  }

  getIdUserShared(){    
    if(this.currentFile.id_shared != ''){
      console.log(this.currentFile.id_shared);
      
      this.sharedService.getAll(this.currentFile.id_shared).subscribe( resp => {
        
        for(let res of resp){
          
          this.IdUserShared.push(res.id_user);
          this.getUserShared(res.id_user);
        }
      });
    }
  }

  getUserShared(id : number){
    this.authService.getUserProfile(id).subscribe( resp => {
      this.usersShared.push(resp);

      for(let user of this.users){
        if(user.username_user == resp.username_user){
          this.users.splice(this.users.indexOf(user), 1);
        }
      }
      
    });
  }

  changePublic(){
    this.currentFile.public = !this.currentFile.public;
    this.fileService.update(this.currentFile.id_file, this.currentFile);
    
  }

  createShared(){

    // Display tables
    
    if(this.currentFile.is_shared != true){
      this.currentFile.is_shared = true;
      
      this.currentFile.id_shared = this.hash;
      
      let shared : Shared = {
        id_shared : this.hash,
        id_folder : this.currentFile.id_stockage_folder,
        id_user : this.currentUser.id_user,
        extension : this.currentFile.extension
      }
      
      this.sharedService.create(shared);
      this.fileService.update(this.currentFile.id_file, this.currentFile);
      this.getIdUserShared();
      
    } else {
      this.usersShared = [];
      this.getIdUserShared();
    }
    this.selectUsersToShared = !this.selectUsersToShared;
  }

  addUserToShare(user : User){

    if(this.currentFile.id_shared != ''){
      let shared : Shared = {
        id_shared : this.currentFile.id_shared,
        id_folder : this.currentFile.id_stockage_folder,
        id_user : user.id_user,
        extension : this.currentFile.extension
      }

      this.sharedService.create(shared);
      this.usersShared.push(user);
      this.users.splice(this.users.indexOf(user), 1);

    } else {
      let shared : Shared = {
        id_shared : this.hash,
        id_folder : this.currentFile.id_stockage_folder,
        id_user : user.id_user,
        extension : this.currentFile.extension
      }
      this.sharedService.create(shared);
      this.usersShared.push(user);
      this.users.splice(this.users.indexOf(user), 1);
    }
    

    
  }

  deleteUserToShare(){

  }

  clearUsers(){
    console.log('azeazzeeaaeaeaezeazezae');
    console.log(this.users);
    
    
    for(let userS of this.users){
      console.log('ca rentre');
      
      for(let user of this.usersShared){
        if(userS.username_user == user.username_user){
          console.log('trouvé');
          
          this.users.splice(this.users.indexOf(user), 1);
        }
      }
    }
  }
  
  close(){
    this.currentFile = this.fileToClear;
    this.event.emit(this.currentFile);
  }
}
