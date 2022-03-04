import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSeeTacheComponent } from 'src/app/features/public/home/modal/modal-see-tache/modal-see-tache.component';
import { Taches } from 'src/app/models/taches';
import { User } from 'src/app/models/user';
import Vote from 'src/app/models/vote';
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
  listVoted : Vote[] = [];

  constructor(
    private serverTaches : TachesService,
    private modalService : NgbModal,

  ) { }

  ngOnInit(): void {
    this.getTacheUser();
  }

  getTacheUser(){
      this.serverTaches.getAll().subscribe( resp => {
        for(let res of resp){
          if(res.personne_t == "" && res.done_t !=1){
            this.tachesUser.push(res);
          }
        }
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

  getVoted(voted : Vote[]){
    this.listVoted = voted;
  }

  openModalSee(tache : Taches){
    const modalRef = this.modalService.open(ModalSeeTacheComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.fromParent = tache;

  }
}
