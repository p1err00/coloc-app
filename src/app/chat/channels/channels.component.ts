import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Channel } from 'src/app/models/channel';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel_user } from 'src/app/models/channel_user';
import { ChannelUserService } from 'src/app/services/channel-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateGroupChatComponent } from '../../shared/modals/modal-create-group-chat/modal-create-group-chat.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  currentUser !: User;
  displayUser: boolean = false;

  @Output() selectChannel = new EventEmitter<any>();

  channelList: Channel_user[] = []

  usersList: User[] = [];

  constructor(
    private _authService: AuthService,
    private _channelUserService: ChannelUserService,
    private _channelService: ChannelService,
    private channelUserService: ChannelUserService,
    private modalService: NgbModal
  ) {
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this._authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getChannel();
    this.getUsers();
  }

  getUsers() {
    this._authService.getAll().subscribe(resp => {
      for (let res of resp) {
        for (let channel of this.channelList) {

          if (res.username_user == this.currentUser.username_user && res.username_user == channel.nom) {

            resp.splice(resp.indexOf(res), 1);
          }
        }
      }
      this.usersList = resp;
    });
  }

  getChannel() {
      setTimeout(() => {
        this._channelUserService.getAll(this.currentUser.id_user).subscribe(resp => {
          this.channelList = resp
        });
      }, 400)
  }

  createChannel(user: User) {

    let alreadyExist = true;

      if(this.channelList.length != 0){
        for (let channel of this.channelList) {

          if (channel.nom == user.username_user) {
            this.setChannel(channel);
            return;
          } 
        }
      } else {
        let hash = (+new Date).toString(36);
  
            let channel = {
              id_channel: 0,
              nom_channel: user.username_user,
              date_creation: new Date,
              id_coloc: this.currentUser.id_coloc,
              hash: hash,
              
            }
  
            // Channel_user to user send
            let channel_user: Channel_user = {
              id_channel: hash,
              id_user: user.id_user,
              id_coloc: this.currentUser.id_coloc,
              nom: user.username_user,
              deleteChannel: 0,
              last_message : ''
            }
            
            // Channel_user to user current
            let channel_current_user: Channel_user = {
              id_channel: hash,
              id_user: this.currentUser.id_user,
              id_coloc: this.currentUser.id_coloc,
              nom: user.username_user,
              deleteChannel: 0,
              last_message : ''
            }
  
            this._channelService.create(channel);
            this.channelUserService.create(channel_user);
            this.channelUserService.create(channel_current_user);
            this.channelList.push(channel_user);
      }
  }

  createGroup() {
      const modalAdd = this.modalService.open(ModalCreateGroupChatComponent, {
        windowClass : 'modalAddStock'
      });
  
      modalAdd.componentInstance.event.subscribe((item : any) => {
  
        // let group = {
        //   id_con : 0,
        //   nom_con : item.name,
        //   quantite_con : item.quantite,
        //   importance : item.importance,
        //   categorie : item.categorie,
        //   date_achat_con : new Date(),
        //   date_peremption_con : new Date(),
        //   id_coloc : this.currentUser.id_coloc
        // }
        // this.stocks.push(stock);
        // this.server.create(stock);
      });
  }

  setChannel(channel: Channel_user) {
    this.selectChannel.emit(channel);
  }

  deleteChannel(event: any, item: Channel_user) {
    event.stopPropagation();
    item.deleteChannel = 1;
    
    this.channelUserService.update(item.id_channel, item);
    this.channelList.splice(this.channelList.indexOf(item), 1);
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
