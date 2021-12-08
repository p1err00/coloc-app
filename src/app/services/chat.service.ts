import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { observable, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('http://localhost:3000');

  constructor() { }

  //!Change any
  joinRoom(data: any) {
    this.socket.emit('join', data);
  }

  sendMessage(data : any){
    this.socket.emit('new message', data);
  }

  getMessage():  Observable<any>{
    return new Observable<{user:User, message: string}>( observer => {
      this.socket.on('new message', (data) => {
        observer.next(data);
        console.log('recuuuuuuuuuuu');
        
      });
      return () => {
        this.socket.disconnect();
      }
    });
  }

  //! Change pour la bdd
  getStorage(){
    const storage = localStorage.getItem('chats');
    return storage ? JSON.parse(storage) : [];
  }

  setStorage(data : any){
    localStorage.setItem('chat', data);
  }
}

