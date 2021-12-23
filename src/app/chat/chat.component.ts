import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel';
import { Channel_user } from '../models/channel_user';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';
import { ChannelService } from '../services/channel.service';
import { ChannelUserService } from '../services/channel-user.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers:[ChatService]
})
export class ChatComponent implements OnInit {

  @Input() currentUser !: User;

  messageText!:string;

  currentChannel !: Channel_user;
  messageArray : Message[] = [];
  selectedUserBool : Boolean = false;

  userList : User[] = [];
  userSendToAll : Channel_user[] = [];

  constructor(
    private _chatService : ChatService,
    private _channelUserService : ChannelUserService,
    private _authService : AuthService,
    private _messageService : MessageService,
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this._authService.getAll().subscribe( resp => {
      this.userList = resp;
    });
  }

  getChannelFromChild(channel : Channel_user){ 
    console.log(channel);
    
    this.currentChannel = channel;   
    this.getMessage(channel.id_channel);
    this.selectedUserBool = true;
  }

  getMessage(channel : string){
    
    this._messageService.getAll(channel).subscribe( resp => {
      this.messageArray = resp;
    });
  }

  join(roomId : number){
    this._chatService.joinRoom({user:this.currentUser.username_user, room:roomId});
  }

  leave(){
    this.selectedUserBool = false;
  }

  sendMessage(message : string){

    let newMessage = {
      id_message : 0,
      id_channel : this.currentChannel.id_channel,
      id_user_send : this.currentUser.id_user,
      message : message,
      date_envoi : new Date(),
      file : '',
      seen : true
    }    
        
    this._messageService.create(newMessage);

    this._chatService.sendMessage({
      message: this.messageText
    });
    
    this.currentChannel.last_message = newMessage.message;
    this.messageText = '';
    
    this._channelUserService.getById(this.currentChannel.id_channel).subscribe( resp => {
      this.userSendToAll = resp;
    });
    
    this.sendForAll(this.userSendToAll);
    this.getMessage(this.currentChannel.id_channel);
  }

  sendForAll(user : Channel_user[]){
    for(let res of user ){
      this._channelUserService.updateById(res.id_channel, res.id_user, this.currentChannel);
      
    }
  }
}
