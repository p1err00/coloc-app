import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from '../../../models/user';
import { ColocationService } from '../../../services/colocation.service';
import { Colocation } from '../../../models/colocation';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  currentUser !: User;

  currentColoc !: Colocation;
  
  users : User[] = [];

  constructor(
    private authService: AuthService,
    private colocService : ColocationService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;
    setTimeout(() => {
      
    });
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      console.log(this.currentUser);
    });
   }

  ngOnInit(): void {
    setTimeout(() => {

      this.getColoc();
      this.getUsers();
    }, 200);
  }

  //Getter
  getColoc(){
    this.colocService.getById(this.currentUser.id_coloc).subscribe( resp => {
      this.currentColoc = resp;
    });
  }

  getUsers(){
    this.authService.getAll().subscribe( resp => {
      this.users = resp;
    });
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
