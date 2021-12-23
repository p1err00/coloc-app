import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { NotificationComponent } from '../notification/notification.component';
import { DepensesComponent } from '../depenses/depenses.component';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  currentUser!: User;

  constructor(
    public authService: AuthService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;   
    
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit() {
    
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
