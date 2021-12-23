import { Component, Input, OnInit, Output } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { Charges } from 'src/app/models/charges';
import { Colocation } from 'src/app/models/colocation';
import { Extra } from 'src/app/models/extras';
import { User } from 'src/app/models/user';
import { ChargesService } from 'src/app/services/charges.service';
import { ExtrasService } from 'src/app/services/extras.service';


@Component({
  selector: 'app-depenses-home',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesHomeComponent implements OnInit {

  @Input() currentUser !: User; 
  @Input() currentColoc !: Colocation;
  @Input() loyer : number = 0;

  charges : Charges[] = [];
  extras : Extra[] = [];

  totalCharges : number = 0;
  totalExtras : number = 0;
  totalRemboursement : number = 420;
  totalAbonnement : number = 320;

  // Charts
  public chargesCharttOptions: ChartOptions = {
    responsive: true,
  };
  public chargesCharttLabels: Label[] = ['remboursement', 'abonnement', 'loyer', 'extras', 'charges'];
  public chargesCharttData: SingleDataSet = [];
  public chargesCharttType: ChartType = 'pie';
  public chargesCharttLegend = true;
  public chargesCharttPlugins = [];
  public chargesCharttColors = [
    {
      backgroundColor: [
        'rgba(92, 184, 92,1)',
        'rgba(255, 195, 0, 1)',
        'rgba(217, 83, 79,1)',
        'rgba(129, 78, 40, 1)',
        'rgba(129, 199, 111, 1)'
      ]
    }
  ];

  constructor(
    private serverCharges : ChargesService,
    private serverExtras : ExtrasService
  ) { }

  ngOnInit(): void {
    this.getCharges();
    this.getExtras();
    this.chargesCharttData.push(this.totalRemboursement);
    this.chargesCharttData.push(this.totalAbonnement);
    this.chargesCharttData.push(this.loyer);
  }

  getCharges() {
     this.serverCharges.getAll(this.currentUser.id_user).toPromise().then(resp => {
       for(let res of resp ){
         this.totalCharges += res.valeur_cha;
       }
       this.chargesCharttData.push(this.totalCharges);
     });
 }

 getExtras() {
   setTimeout(() => {
     this.serverExtras.getAll(this.currentUser.id_user).toPromise().then(resp => {
       for(let res of resp){
         this.totalExtras += res.valeur_ex;
       }
       this.chargesCharttData.push(this.totalExtras);
     });
   }, 200);
 }
}
