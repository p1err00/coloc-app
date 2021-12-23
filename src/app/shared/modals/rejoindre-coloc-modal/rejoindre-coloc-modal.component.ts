import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-rejoindre-coloc-modal',
  templateUrl: './rejoindre-coloc-modal.component.html',
  styleUrls: ['./rejoindre-coloc-modal.component.scss']
})
export class RejoindreColocModalComponent implements OnInit {

  currentUser !: User;

  constructor(
    private authService : AuthService
  ) { 
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));
    let id = tokenInfo.id;
    
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;   
    });
  }

  ngOnInit(): void {
  }

  sendRequest(idColoc : string){
    console.log(this.currentUser);
    
    this.authService.sendNotifToColoc(idColoc, this.currentUser);
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
