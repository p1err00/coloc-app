import { Component, OnInit } from '@angular/core';
import { ChargesService } from '../services/charges.service';
import { ExtrasService } from '../services/extras.service';
import { Charges } from '../models/charges';
import { Extra } from '../models/extras';
import { User } from '../models/user';
import { ChartType, ChartOptions, ChartDataSets  } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';
import { AlertService } from '../services/alert.service';
import { ColocationService } from '../services/colocation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddChargesComponent } from '../modals/modal-add-charges/modal-add-charges.component';
import { ModalAddExtrasComponent } from '../modals/modal-add-extras/modal-add-extras.component';


@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements OnInit {


  currentUser !: User;

  products: Charges[] = [];
  extras: Extra[] = [];

  totalCharges: number = 0;
  totalExtras: number = 0;
  totalTotaux: number = 0;
  loyer: number = 0;

  // Donut Chart charges
  public chargesChartLabels:string[] = [];
  public chargesChartData:number[] = [];
  public chargesChartType:ChartType = 'doughnut';
  public chargesChartColors = [
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

  
  // Donut chart extra
  public extraChartLabels:string[] = [];
  public extraChartData:number[] = [];
  public extraChartType:ChartType = 'doughnut';
  public extraChartColors = [
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
    private serverCharge: ChargesService,
    private serverExtra: ExtrasService,
    private authService: AuthService,
    private alertService: AlertService,
    private modalService : NgbModal,
    private colocService: ColocationService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getCharges();
    this.getExtras();
    this.getLoyer();
    this.calculateAllCharges();
    this.calculateAllExtra();
    this.calculateAlldepenses();

  }

  //Get values
  getCharges() {
    setTimeout(() => {
      this.serverCharge.getAll(this.currentUser.id_user).subscribe(resp => {
        this.products = resp;
        this.fillChartChargesData();
        this.fillChartChargesLabel();
      });
    });
  }

  getExtras() {
    setTimeout(() => {
      this.serverExtra.getAll().subscribe(resp => {
        this.extras = resp;
        this.fillChartExtraData();
        this.fillChartExtraLabel();
      });
    });
  }

  getLoyer() {
    setTimeout(() => {

      this.colocService.getById(this.currentUser.id_coloc).subscribe(resp => {

        this.loyer = resp.loyer_coloc / resp.nb_personnes_coloc;
      });
    }, 200);
  }

  //Charges part

  addCharge(){

    const modalRef = this.modalService.open(ModalAddChargesComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item : any) => {
      
      let charge = {
        id_cha : 0,
        nom_cha : item.nom_cha,
        valeur_cha : item.valeur_cha,
        select_cha : false,
        id_user : this.currentUser.id_user
      }

      this.serverCharge.create(charge);
      this.products.push(charge);
      this.alertService.showSuccess('Charge', 'Charge ajouté');
    });
  
  }

  changeSelect(product: Charges) {
    product.select_cha = !product.select_cha;
    this.serverCharge.update(product.nom_cha, product);
  }

  calculateCharges() {
    this.totalCharges = 0;

    for (let product of this.products) {
      if (product.select_cha == true) {
        this.totalCharges += product.valeur_cha;
      }
    }
    this.calculateAlldepenses();

  }

  calculateAllCharges() {
    this.totalCharges = 0;
    this.serverCharge.getAll(this.currentUser.id_user).subscribe(resp => {
      for (let res of resp) {
        this.totalCharges += res.valeur_cha;
      }
    });
    this.calculateAlldepenses();

  }

  changePrice(id: number, price: number) {
    for (let product of this.products) {

      if (product.id_cha === id) {
        product.valeur_cha = price;
        this.serverCharge.update(product.nom_cha, product)
      }
    }
  }

  deleteCharges(charge: Charges) {
    if (confirm("Etes-vous sur de vouloir supprimer " + charge.nom_cha)) {
      this.products.splice(this.products.indexOf(charge), 1);
      this.serverCharge.delete(charge.id_cha);
    }
  }

  //Extra part

  addExtra(){
    const modalRef = this.modalService.open(ModalAddExtrasComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item : any) => {
      
      let extra = {
        id_ex: 0,
        nom_ex : item.nom_ex,
        valeur_ex : item.valeur_ex,
        select_ex : false,
        id_user : this.currentUser.id_user
      }
      console.log(extra);
      
      this.serverExtra.create(extra);
      this.extras.push(extra);
      this.alertService.showSuccess('Extra', 'Extra ajouté');
    });
  }

  deleteExtras(extra: Extra) {
    if (confirm("Etes-vous sur de vouloir supprimer " + extra.nom_ex)) {
      this.extras.splice(this.extras.indexOf(extra), 1);
      this.serverExtra.delete(extra.id_ex);
    }
  }

  changeSelectExtra(extra: Extra) {
    extra.select_ex = !extra.select_ex;
    this.serverExtra.update(extra.id_ex, extra);
  }

  calculateExtra() {
    this.totalExtras = 0;
    for (let extra of this.extras) {
      if (extra.select_ex == true) {
        this.totalExtras += extra.valeur_ex;
      }
    }
    this.calculateAlldepenses();
  }

  calculateAllExtra() {
    this.totalExtras = 0;
    this.serverExtra.getAll().subscribe(resp => {
      for (let res of resp) {
        this.totalExtras += res.valeur_ex;
      }
    });
    this.calculateAlldepenses();

  }

  changePriceExtra(id: number, price: number) {
    for (let extra of this.extras) {

      if (extra.id_ex === id) {
        extra.valeur_ex = price;
        this.serverExtra.update(extra.id_ex, extra)
      }
    }
  }


  //All calcule
  calculateAlldepenses() {
    setTimeout(() => {
      this.totalTotaux = this.totalCharges + this.totalExtras + this.loyer
    }, 300);
  }


  // Charts donuts

    //Charges

  fillChartChargesLabel(){
    for(let product of this.products){
      this.chargesChartLabels.push(product.nom_cha);
    }
  }

  fillChartChargesData(){    
    for(let product of this.products){
      this.chargesChartData.push(product.valeur_cha);
    }
  }

    // Extra

  fillChartExtraLabel(){
    for(let extra of this.extras){
      this.extraChartLabels.push(extra.nom_ex);
    }
  }

  fillChartExtraData(){
    for(let extra of this.extras){
      this.extraChartData.push(extra.valeur_ex);
    }
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
