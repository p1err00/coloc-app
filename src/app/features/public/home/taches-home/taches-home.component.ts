import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Taches } from 'src/app/models/taches';
import { TachesService } from 'src/app/services/taches.service';

@Component({
  selector: 'app-taches-home',
  templateUrl: './taches-home.component.html',
  styleUrls: ['./taches-home.component.scss']
})
export class TachesHomeComponent implements OnInit {

  tachesDefini: Taches[] = [];
  tachesNonDefini: Taches[] = [];

  nbTachesDefini : number = 0;
  nbTachesNonDefini : number = 0;

  constructor(
    private serverTaches: TachesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getTaches();

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

  redirectTache() {
    this.router.navigate(['/taches'])
  }
}
