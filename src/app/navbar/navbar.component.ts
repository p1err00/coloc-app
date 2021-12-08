import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';
import { AlertService } from '../services/alert.service';
import { Notification } from '../models/notification';
import { NotificationService } from '../services/notification.service';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser !: User;
  nbNotif : number = 0
  notifs : Notification[] = [];

  constructor(
    public authService: AuthService,
    private alertService : AlertService,
    private notifService : NotificationService,
    
  ) {     
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));
    let id = tokenInfo.id;
    
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getNotif();
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  logout() {
    this.authService.doLogout()
  }

  getNotif(){
    setTimeout(() => {
      this.notifService.getAll().subscribe( resp => {
        this.notifs = resp;
        for(let res of resp){
          if(res.id_user_receive == this.currentUser.id_user && res.is_read != true){           
            this.nbNotif++;
          }
        }
      });
    }, 200);
  }

  setNbNotifs(nbNotifs : number){
    this.nbNotif = nbNotifs;
  }

  countNotifs(){
    setTimeout(() => {
      for(let notif of this.notifs){
        this.nbNotif+=1; 
      }
    },400);
    
  }
}
