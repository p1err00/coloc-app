import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { AlertService } from '../../services/alert.service';
import { Notification } from '../../models/notification';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() currentUser !: User;

  nbNotif : number = 0
  notifs : Notification[] = [];

  constructor(
    public authService: AuthService,
    private notifService : NotificationService,
    
  ) {     
  }

  ngOnInit(): void {
    if(this.currentUser){

      this.getNotif();
    }
  }

  logout() {
    this.authService.doLogout()
  }

  getNotif(){
      this.notifService.getAll().subscribe( resp => {
        this.notifs = resp;
        for(let res of resp){
          if(res.id_user_receive == this.currentUser.id_user && res.is_read != true){           
            this.nbNotif++;
          }
        }
      });
  }

  setNbNotifs(nbNotifs : any){
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
