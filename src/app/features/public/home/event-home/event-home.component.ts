import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenements } from 'src/app/models/evenements';
import { EvenementsService } from 'src/app/services/evenements.service';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.scss']
})
export class EventHomeComponent implements OnInit {

  events: Evenements[] = [];
  nbEvents!: number;


  constructor(
    private serverEvent: EvenementsService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    let date = new Date().toString();
    date = formatDate(new Date(), 'yyyy-MM-dd', 'en')
    
    this.serverEvent.getAll().toPromise().then(resp => {

      for(let res of resp ){
        
        if(res.date_fin_e.toString() > date){
          
          this.events.push(res);
        }
        
      }
    });
  }

  redirectEvent() {
    this.router.navigate(['/evenements'])
  }
}
