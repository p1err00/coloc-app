import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
    import jwt_decode from 'jwt-decode';
import { User } from '../../../models/user';

@Component({
  selector: 'app-personnalisation',
  templateUrl: './personnalisation.component.html',
  styleUrls: ['./personnalisation.component.scss']
})
export class PersonnalisationComponent implements OnInit {

  currentUser !: User;

  constructor(
    private authService: AuthService
  ) { 
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));
    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      console.log(this.currentUser);
    });

  }

  ngOnInit(): void {
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
