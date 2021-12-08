import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Stock } from '../models/stock';
import { Taches } from '../models/taches';
import { Evenements } from '../models/evenements';
import { ServerStockService } from '../services/server-stock.service';
import { ServerService } from '../services/serverCourse.service';
import { EvenementsService } from '../services/evenements.service';
import { TachesService } from '../services/taches.service';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { ColocationService } from '../services/colocation.service';
import { Colocation } from '../models/colocation';
import { SidebarRightComponent } from '../sidebar-right/sidebar-right.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser !: User;

  currentColoc : any;

  stocks: Stock[] = [];
  courses: Course[] = [];
  tachesDefini: Taches[] = [];
  tachesNonDefini: Taches[] = [];
  events: Evenements[] = [];
  tachesUser : Taches[] = [];

  //Count
  nbTachesDefini : number = 0;
  nbTachesNonDefini : number = 0;
  nbEvents!: number;

  //Current date
  currentDate: Date = new Date();

  //Data on page
  nb_personnes : number = 0;
  loyer : number = 0;
  user_course : string = "";
  show : boolean = false;

  constructor(
    private serverStock: ServerStockService,
    private serverCourses: ServerService,
    private serverTaches: TachesService,
    private serverEvent: EvenementsService,
    private router: Router,
    private authService: AuthService,
    private serverColoc : ColocationService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).toPromise().then(res => {
      this.currentUser = res;
      this.getColoc();
    });
  }

  ngOnInit(): void {
    this.getStock();
    this.getCourses();
    this.getTaches();
    this.getEvents();
    this.getTacheUser();
  }

  getStock() {
    this.serverStock.getAll().subscribe(resp => {
      for (let i = 0; i < 5; i++) {
        this.stocks.push(resp[i]);
      }
    });
  }

  getCourses() {
    this.serverCourses.getAll().subscribe(resp => {
      for (let i = 0; i < 5; i++) {

      this.courses.push(resp[i]);
      }
    });
  }

  getTaches() {
    this.serverTaches.getAll().subscribe(resp => {

      for (let item of resp) {
        if (item.personne_t != '' && item.done_t != 1) {

          this.tachesDefini.push(item);
          this.nbTachesDefini++;
        } else if(item.done_t != 1){

          this.tachesNonDefini.push(item);
          this.nbTachesNonDefini++;
        }
      }
    });
  }

  getEvents() {
    this.serverEvent.getAll().subscribe(resp => {
      for (let i = 0; i < 5; i++) {
        this.events.push(resp[i]);
      }
    });
  }

  getColoc(){
    this.serverColoc.getById(this.currentUser.id_coloc).subscribe( resp => {
      console.log(resp);
      
      this.currentColoc = resp;

      //Set datas
      this.nb_personnes = this.currentColoc.nb_personnes_coloc;
      this.loyer = this.currentColoc.loyer_coloc;
      this.user_course = this.currentColoc.user_course;
    });
  }

  getTacheUser(){
    setTimeout(() => {
      this.serverTaches.getByUser(this.currentUser.username_user).subscribe( resp => {
        this.tachesUser = resp;
        console.log(resp);
        
      });
    }, 100);
  }

  //Redirection
  redirectStock() {
    this.router.navigate(['/stock'])
  }
  redirectCourse() {
    this.router.navigate(['/courses'])
  }
  redirectTache() {
    this.router.navigate(['/taches'])
  }
  redirectEvent() {
    this.router.navigate(['/evenements'])
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
