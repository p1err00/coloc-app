import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from '../../../models/user';
import { ExtrasService } from '../../../services/extras.service';
import { ChargesService } from '../../../services/charges.service';
import { Charges } from '../../../models/charges';
import { Extra } from '../../../models/extras';
import { Taches } from '../../../models/taches';
import { Evenements } from '../../../models/evenements';
import * as PropTypes from 'prop-types'


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  currentUser !: User;
  usersList: User[] = [];
  chargesList: Charges[] = [];
  extrasList: Extra[] = [];
  tachesList: Taches[] = [];
  evenetsList: Evenements[] = []

  // Pie
  public chargesCharttOptions: ChartOptions = {
    responsive: true,
  };
  public chargesCharttLabels: Label[] = [];
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


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  ];


  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';



  constructor(
    private authService: AuthService,
    private serverCharge: ChargesService,
    private serverExtra: ExtrasService
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).toPromise().then(res => {
      this.currentUser = res;
    });


    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCharges();
  }

  getUsers() {
    let charges: number = 0;
    this.authService.getAll().subscribe(resp => {
      for (let user of resp) {
        this.chargesCharttLabels.push(user.username_user);
        this.serverCharge.getById(user.id_user).subscribe(resp => {
          for (let charge of resp) {
            charges += charge.valeur_cha;
          }
          this.chargesCharttData.push(charges);

        });
      }
      console.log(this.chargesCharttData);

    });
  }

  getCharges() {
    setTimeout(() => {
      console.log(this.usersList);

    }, 200);
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
