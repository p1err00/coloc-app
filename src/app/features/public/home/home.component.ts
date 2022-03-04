import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from '../../../models/user';
import { ColocationService } from '../../../services/colocation.service';
import { Colocation } from 'src/app/models/colocation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser !: User;
  currentColoc !: any;
  currentCourse !: string;

  //Current date
  currentDate: Date = new Date();

  //Data on page
  nb_personnes : number = 0;
  loyer_coloc : number = 0;
  
  user_course : string = "";
  show : boolean = false;

  constructor(
    private authService: AuthService,
    private serverColoc : ColocationService,
  ) {
    let tokenInfo = this.authService.getDecodedAccessToken();
    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
      this.getColoc();
    });
  }

  ngOnInit(): void {

  }

  getColoc(){
    this.serverColoc.getById(this.currentUser.id_coloc).toPromise().then(resp => {
      this.currentColoc = resp;
      // this.nb_personnes = resp.nb_personnes_coloc;
      // this.user_course = resp.user_course;
      // this.loyer_coloc = resp.loyer_coloc;
      // this.currentCourse = resp.user_course;
    })
    
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
