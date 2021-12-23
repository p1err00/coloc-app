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
    this.serverEvent.getAll().toPromise().then(resp => {
        this.events = resp
    });
  }

  redirectEvent() {
    this.router.navigate(['/evenements'])
  }
}
