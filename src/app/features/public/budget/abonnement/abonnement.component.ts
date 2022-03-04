import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Abonnement } from '../models/abonnement.model';
import { AbonnementService } from '../services/abonnement.service';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {

  @Input() currentUser !: User;

  abonnements_payed : Abonnement[] = [];
  abonnements_not_payed : Abonnement[] = [];

  nbAbonnements : number = 0;
  totalAmountAbonnements : number = 0;
  nb_abonnemet_unpaid : number = 0;
  nb_abonnement_paid : number = 0;

  constructor(
    private abonnementService : AbonnementService
  ) { }

  ngOnInit(): void {
    this.getNotPayed();
    this.getAlreadyPayed();
  }

  getNotPayed(){
    setTimeout(() => {
      this.abonnementService.getNotPayed(this.currentUser.id_user).toPromise().then( resp => {
        console.log(resp);
        
        this.abonnements_not_payed = resp;
        this.nb_abonnemet_unpaid = resp.length;
      });
    }, 200);
  }

  getAlreadyPayed(){
    
    setTimeout(() => {
      this.abonnementService.getAlreadyPayed(this.currentUser.id_user).toPromise().then( resp => {
        this.abonnements_payed = resp;
        this.nb_abonnement_paid = resp.length;
      });
    }, 200);
  }

}
