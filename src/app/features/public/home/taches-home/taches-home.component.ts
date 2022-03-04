import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taches } from 'src/app/models/taches';
import { User } from 'src/app/models/user';
import { TachesService } from 'src/app/services/taches.service';

@Component({
  selector: 'app-taches-home',
  templateUrl: './taches-home.component.html',
  styleUrls: ['./taches-home.component.scss']
})
export class TachesHomeComponent implements OnInit {

  tachesUser: Taches[] = [];
  tachesNotDefined : Taches[] = []
  @Input() currentUser !: User;

  nbTachesDefini : number = 0;


  constructor(
    private serverTaches: TachesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTaches();
    this.getTachesNotDeined();
  }

  getTaches() {
    setTimeout(() => {
      this.serverTaches.getByUser(this.currentUser.username_user).subscribe(resp => {

        this.tachesUser = resp;
      });
    }, 200);
  }

  getTachesNotDeined() {
    setTimeout(() => {
      this.serverTaches.getAll().subscribe(resp => {

        for(let res of resp){
          if(res.personne_t == ''){
            this.tachesNotDefined.push(res);
          }
        }
        this.tachesUser = resp;
      });
    }, 200);
  }

  redirectTache() {
    this.router.navigate(['/taches'])
  }
}
