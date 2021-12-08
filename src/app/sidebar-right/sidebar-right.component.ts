import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '../services/notification.service';

import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Notification } from '../models/notification';



@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {

  currentUser !: User;

  @Output() setNbNotifs = new EventEmitter<any>();
  nbNotifs : number = 0;
  notifs : Notification[] = [];
  users : string[] = [];

  constructor(
    public authService: AuthService,
    private notifService : NotificationService
  ) { 
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));
    let id = tokenInfo.id;
    
    this.authService.getUserProfile(id).toPromise().then(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getNotifs();
  }

  getNotifs(){

    this.notifService.getAll().subscribe( resp => {     
      
      for(let res of resp){

        if(res.is_read == false){

          if(this.currentUser.admin_user == 1 && res.nom_notif == "Demande ajout"){
            this.notifs.push(res);
            this.nbNotifs++;
          }
          if(res.id_user_receive === this.currentUser.id_user && res.nom_notif != "Demande ajout" && res.id_user_send != this.currentUser.id_user){
            this.notifs.push(res);
            this.nbNotifs++;
          }
        }
      }      
    });
  }

  setNbNotif(){
    this.setNbNotifs.emit(this.nbNotifs);
  }

  // Delete notif
  deleteNotif(notif : Notification){
    notif.is_read = true;
    this.notifService.put(notif.id_notif, notif);
    this.notifs.splice(this.notifs.indexOf(notif), 1);
    this.nbNotifs--;
    this.setNbNotif();
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
