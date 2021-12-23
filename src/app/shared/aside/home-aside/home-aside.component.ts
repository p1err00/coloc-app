import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Taches } from 'src/app/models/taches';
import { User } from 'src/app/models/user';
import { TachesService } from 'src/app/services/taches.service';

@Component({
  selector: 'app-home-aside',
  templateUrl: './home-aside.component.html',
  styleUrls: ['./home-aside.component.scss']
})
export class HomeAsideComponent implements OnInit {

  @Input() currentUser !: User;

  tachesUser : Taches[] = [];
  tacheColor : string = '';


  constructor(
    private serverTaches : TachesService,
  ) { }

  ngOnInit(): void {
    this.getTacheUser();
    
  }

  getTacheUser(){
      this.serverTaches.getByUser(this.currentUser.username_user).subscribe( resp => {
        this.tachesUser = resp;
    });
  }

  compareDate(date : Date){

    let currentDate = new Date();
    date = new Date(date);

    let  resultS = (date.getTime() - currentDate.getTime()) /1000;
    let  resultM = (resultS) /60;
    let  resultH = (resultM) /60;
    let  resultD = (resultH) /24;
    
    this.tacheColor = '';
    if(resultD > 10){
      this.tacheColor = 'green';
    } else if(resultD < 5 && resultD > 2 ){
      this.tacheColor = 'blue';
    } else if(resultD < 5 && resultD > 1 ){
      this.tacheColor = 'yellow';
    } else if(resultD > 6){
      this.tacheColor = 'red';
    }
    
    return this.tacheColor;
  }
}
