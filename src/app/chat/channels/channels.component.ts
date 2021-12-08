import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Channel } from 'src/app/models/channel';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ChannelService } from 'src/app/services/channel.service';
import { Channel_user } from 'src/app/models/channel_user';
import { ChannelUserService } from 'src/app/services/channel-user.service';

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
    private channelUserService: ChannelUserService
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

    setTimeout(() => {
      this._authService.getAll().subscribe(resp => {
        for(let res of resp){
          for(let channel of this.channelList){

            if(res.username_user != this.currentUser.username_user && res.username_user != channel.nom){
              
              this.usersList.push(res);
            }
          }
        }
      });
    }, 300);
  }

  getChannel() {
    setTimeout(() => {
      this._channelUserService.getAll(this.currentUser.id_user).subscribe(resp => {
        this.channelList = resp;
      });
    }, 200);
  }

  createChannel(user: User) {

    let alreadyExist = true;

    if (this.channelList.length != 0) {
      for (let channel of this.channelList) {

        if (channel.nom == user.username_user) {

          alreadyExist = false;
          return;
        } else {
          let hash = (+new Date).toString(36);

          let channel = {
            id_channel: 0,
            nom_channel: user.username_user,
            date_creation: new Date,
            id_coloc: this.currentUser.id_coloc,
            hash: hash
          }

          this._channelService.create(channel);

          // Channel_user to user send
          let channel_user: Channel_user = {
            id_channel: hash,
            id_user: user.id_user,
            id_coloc: this.currentUser.id_coloc,
            nom: user.username_user
          }

          this.channelUserService.create(channel_user);

          // Channel_user to user current
          let channel_current_user: Channel_user = {
            id_channel: hash,
            id_user: this.currentUser.id_user,
            id_coloc: this.currentUser.id_coloc,
            nom: user.username_user
          }

          this.channelUserService.create(channel_current_user);
        }
      }
    } else {
      let hash = (+new Date).toString(36);

      let channel = {
        id_channel: 0,
        nom_channel: user.username_user,
        date_creation: new Date,
        id_coloc: this.currentUser.id_coloc,
        hash: hash
      }

      this._channelService.create(channel);

      // Channel_user to user send
      let channel_user: Channel_user = {
        id_channel: hash,
        id_user: user.id_user,
        id_coloc: this.currentUser.id_coloc,
        nom: user.username_user
      }

      this.channelUserService.create(channel_user);

      // Channel_user to user current
      let channel_current_user: Channel_user = {
        id_channel: hash,
        id_user: this.currentUser.id_user,
        id_coloc: this.currentUser.id_coloc,
        nom: user.username_user
      }

      this.channelUserService.create(channel_current_user);
    }
  }

  createGroup(){
    alert('a implementer'); 
  }

  setChannel(channel: Channel_user) {
    console.log(channel);

    this.selectChannel.emit(channel);

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
