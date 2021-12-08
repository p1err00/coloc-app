import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddVoteComponent } from '../modals/modal-add-vote/modal-add-vote.component';
import Vote from '../models/vote';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { VoteService } from '../services/vote.service';
import { ChoiceService } from '../services/choice.service';
import { Choice_user } from '../models/choice_user';
import { ChoiceUserService } from '../services/choice-user.service';
import { Choice } from '../models/choice';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  
  currentUser !: User;

  voteList : Vote[] = [];
  choiceList : Choice[] = [];
  voteMap : Map<Vote, Choice[]> = new Map();
  

  constructor(
    private modalService : NgbModal,
    private alertService : AlertService,
    private authService: AuthService,
    private voteService : VoteService,
    private choiceService : ChoiceService,
    private choice_user : ChoiceUserService

  ) { 
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getVote();
  }

  getVote(){
    setTimeout(() => {
      this.voteService.getAll(this.currentUser.id_coloc).subscribe( resp => {
        this.voteList = resp;

        for(let vote of this.voteList){
          this.choiceService.getAll(vote.id_vote).subscribe( resp => {
            this.voteMap.set(vote, resp);              
          });
        }
      });
    }, 200);
  }

  getChoice(id_vote : string){
    
  }

  createVote(){
    this.openModalAdd();

  }

  deleteVote(){

  }

  // Modals

  openModalAdd(){
    const modalRef = this.modalService.open(ModalAddVoteComponent,{
      windowClass : 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item : any) => {
      let hash = (+new Date).toString(36);
      
      console.log(item);

      let vote = {
        id_vote : hash,
        nom : item.nom,
        instigator : this.currentUser.username_user,
        date_creation : new Date,
        is_anonyme : item.anonyme,
        nb_response : 0,
        id_coloc : this.currentUser.id_coloc
      }

      //?add to list and server
      this.voteService.create(vote);
      console.log(item.choix);
      
      for(let choiceItem of item.choix ){

        let choice = {
          id_choice : 0,
          id_vote : hash,
          nom : choiceItem,
          nb_vote : 0
        }
        this.choiceService.create(choice);
      }

      this.alertService.showSuccess('Tache', 'Tache créer avec succès');
    });
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
