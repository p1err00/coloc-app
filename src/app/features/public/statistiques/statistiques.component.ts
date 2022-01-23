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
import { TachesService } from 'src/app/services/taches.service';
import { EvenementsService } from 'src/app/services/evenements.service';


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
  usersListString : string[] = [];

  number : number[] = [];


  charges: number = 0;


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
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  ];


  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  public barChartData = [
    {data: this.number, label: ''},

  ];
  barChartColor = [
      {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  ];


  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = ["1", "2", "3", "4", "5", "6", "7", '8', '9', '10', '11', '12'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
      
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';



  constructor(
    private authService: AuthService,
    private serverCharge: ChargesService,
    private serverExtra: ExtrasService,
    private serverTaches : TachesService,
    private serverEvent : EvenementsService
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
    this.getEvents();
  }

  getUsers() {
    this.authService.getAll().subscribe(resp => {
      for (let user of resp) {
        this.chargesCharttLabels.push(user.username_user);
        this.barChartLabels.push(user.username_user);
        this.getCharges(user);
        this.getTaches(user);
        // this.barChartData.push({data : this.number, label : user.username_user});
      }      
    });
  }

  getCharges(user : User) {
    setTimeout(() => {
      this.serverCharge.getById(user.id_user).subscribe(resp => {
        for (let charge of resp) {
          this.charges += charge.valeur_cha;
        }
        this.chargesCharttData.push(this.charges);
      });
    }, 200);
  }


  // TODO Refaire
  getTaches(user : User){
    this.serverTaches.getByUser(user.username_user).subscribe( resp => {
      this.number.push(resp.length);
      
    });    
  }

  getEvents(){
    let numberList : number[] = [];
    let aze : number = 0;
    this.serverEvent.getAll().subscribe( resp => {
     
      resp = resp.sort((a, b) => a.date_exec_e.toString().localeCompare(b.date_exec_e.toString()));

      for(let i = 0; i < 12; i++){
        console.log('ca rentre I');
        for(let res of resp){
            console.log('ca rentre RES');
          
          if(new Date(res.date_exec_e).getMonth() == i){            
            aze++;
          }
        }
        numberList.push(aze);
        aze = 0;
      }      
    });
    this.lineChartData.push({data : numberList, label : 'event'});
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
