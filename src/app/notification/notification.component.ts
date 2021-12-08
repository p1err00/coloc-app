import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../models/notification';
import { AuthService } from '../services/auth.service'
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  currentUser !: User;

  notifAjout : Notification[] = []; 
  notifAutre : Notification[] = [];
  usersNotif : User[] = [];

  constructor(
    private httpNotif : NotificationService,
    private httpUser : AuthService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;   
    
    this.httpUser.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      this.getNotifs();
    });
   }

  ngOnInit(): void {
    
  }

  getNotifs(){

    this.httpNotif.getAll().subscribe( resp => {     
      console.log(resp);
      
      for(let res of resp){
        if(res.is_read != true){
          if(res.nom_notif === "Demande ajout"){
            this.notifAjout.push(res);
          } else {
            this.notifAutre.push(res);
          }
          console.log(res.id_user_send);
          
          this.getUserById(res.id_user_send);
        }       
      }
    });
  }

  getUserById(id : number){
    console.log(id);
    
    setTimeout(() => {
      this.httpUser.getUserProfile(id).subscribe( resp => {
        this.usersNotif.push(resp); 
        console.log(this.usersNotif);
        
      });

    });
  }


  accepteUser(notif : Notification, user : User){

    user.id_coloc = this.currentUser.id_coloc;
    
    this.httpUser.update(user.id_user, user);

    let newNotif = {
      id_notif : 0,
      nom_notif : notif.nom_notif,
      desc_notif : notif.desc_notif,
      date_creation_notif : notif.date_creation_notif,
      is_read : true,
      id_coloc : notif.id_coloc,
      id_user_send : notif.id_user_send,
      id_user_receive : 0
    }
    
    this.httpNotif.put(notif.id_notif, newNotif);
  }

  refuseUser(notif : Notification, user : User){

    let newNotif = {
      id_notif : 0,
      nom_notif : notif.nom_notif,
      desc_notif : notif.desc_notif,
      date_creation_notif : notif.date_creation_notif,
      is_read : true,
      id_coloc : notif.id_coloc,
      id_user_send : notif.id_user_send,
      id_user_receive : 0
    }

    this.httpNotif.put(notif.id_notif, newNotif);
  }

  setNotifForUser(data : Notification){
    this.httpNotif.post(data);
  }

  // ! Look which notification send
  setNotifForAllUser(id: number, data : Notification){
    //this.httpNotif.postForAll(id, data)
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
