import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddVoteComponent } from '../../../shared/modals/modal-add-vote/modal-add-vote.component';
import Vote from '../../../models/vote';
import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';
import jwt_decode from 'jwt-decode';
import { User } from '../../../models/user';
import { VoteService } from '../../../services/vote.service';
import { ChoiceService } from '../../../services/choice.service';
import { Choice_user } from '../../../models/choice_user';
import { ChoiceUserService } from '../../../services/choice-user.service';
import { Choice } from '../../../models/choice';
import { ModalDeleteVoteComponent } from '../../../shared/modals/modal-delete-vote/modal-delete-vote.component';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  @Input() fromParent : any;
  
  @Input() currentUser !: User;

  voteList : Vote[] = [];
  voteFinished : Vote[] = [];
  choiceList : Choice[] = [];
  choiceUser : Choice_user[] = [];
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
      if(this.currentUser){
        this.getVote();
        this.getChoiceUser();
      }
  }

  getVote(){
      this.voteService.getAll(this.currentUser.id_coloc).toPromise().then( (resp) => {
        this.voteList = resp
      });
        this.fillVote();
  }

  //! A supprimer
  reloadVote(){
    this.voteService.getAll(this.currentUser.id_coloc).subscribe( (resp) => {
      this.voteList = [];
      this.voteMap.clear();
      this.voteList = resp
    });
      this.fillVote();
  }

  fillVote(){
    setTimeout(() => {
      for(let vote of this.voteList){
        this.choiceService.getAll(vote.id_vote).subscribe( (resp) => {
          this.voteMap.set(vote, resp);              
        });
      }
    }, 300);
  }

  getChoiceUser(){
      setTimeout(() => {
        this.choice_user.getAll(this.currentUser.id_user).subscribe( (resp) => {
          this.choiceUser = resp;        
        });
      }, 200);
  }

  hasVoted(choice : Choice){
    let color : string = ''

    for(let item of this.choiceUser){
      
      if(item.nom_choice == choice.nom && item.has_voted == true){
        color = 'blue';
        return color;
      }
    }    
    return color;
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
        id_coloc : this.currentUser.id_coloc,
        timer : item.timer
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


  openModalDelete(item : Vote){
    const modalDel = this.modalService.open(ModalDeleteVoteComponent,{
      windowClass : 'modalStockDelete'
    });
    modalDel.componentInstance.fromParent = item;
    
    modalDel.componentInstance.event.subscribe((item : any) =>{
      console.log(item.id_vote);
      this.voteService.delete(item.id_vote);
      this.voteList.splice(this.voteList.indexOf(item), 1);
      this.voteMap.delete(item);
    });
  }


  voted(vote : Choice){

    if(this.choiceUser.length == 0){
      let choice_user : Choice_user = {
        id_choice : vote.id_choice,
        id_vote : vote.id_vote,
        id_user : this.currentUser.id_user,
        has_voted : true,
        nom_choice : vote.nom
      }
      this.choice_user.create(choice_user);
    }

    for(let item of this.choiceUser){
      console.log('if');
      
      if(item.id_vote == vote.id_vote){
        item.nom_choice = vote.nom;
        console.log(item);
        this.choice_user.update(item.id_choice, item);

      } else {
        console.log('else');
        
        let choice_user : Choice_user = {
          id_choice : vote.id_choice,
          id_vote : vote.id_vote,
          id_user : this.currentUser.id_user,
          has_voted : true,
          nom_choice : vote.nom
        }
        
        this.choice_user.create(choice_user);
      }
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
