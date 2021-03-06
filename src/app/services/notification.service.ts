import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl : string = "http://localhost:3000/"

  constructor(
    private http : HttpClient) { }

    //Get all notifications
    getAll(){
      return this.http.get<Notification[]>(this.baseUrl+"notification");
    }

    //Get norification by id
     getById(id : number) : Observable<Notification[]>{
      return this.http.get<Notification[]>(this.baseUrl+`notification/${id}`);
    }

    //Get all notif by coloc id
    getByIdColoc(id : number){
      return this.http.get(this.baseUrl+`notification/coloc/${id}`);
    }


    //post notifictation
    post(data : any){
      return this.http.post(this.baseUrl+"notification", data).subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }

    /* ================= Post ================= */

    // Demande ajout

    // Nouvel utilisateur
    postNewUser(nom_user : string, id_coloc : number, id_user_receive : number){

      let data = {
        id_notif : 0,
        nom_notif : 'Nouvel utilisateur',
        desc_notif : nom_user + " vient de rentrer dans la coloc",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : 0,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }

    // Changement de ...
    postChangeSomething(nom_user : string, nom_changement: string, id_coloc : number, id_user_send : number, id_user_receive : number ){

      let data = {
        id_notif : 0,
        nom_notif : 'Changement',
        desc_notif : nom_user + " a chang?? un(e) " + nom_changement,
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : id_user_send,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }

    // Nouvelle tache (Tous)
    postNewTache(nom_user : string, id_coloc : number, id_user_send : number, id_user_receive : number ){

      let data = {
        id_notif : 0,
        nom_notif : 'Tache',
        desc_notif : nom_user + " a ajout??(e) une tache",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : id_user_send,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }

    // Nouvel evenement
    postNewEvenenent(nom_user : string, id_coloc : number, id_user_send : number, id_user_receive : number ){

      let data = {
        id_notif : 0,
        nom_notif : 'Evenement',
        desc_notif : nom_user + " a ajout??(e) un evenement",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : id_user_send,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }

    // Assign?? ?? course (Perso)
    postAssignToCourse(id_coloc : number, id_user_receive : number){

      let data = {
        id_notif : 0,
        nom_notif : 'Assignation course user',
        desc_notif : "Vous avez ete assign?? ?? faire les courses",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : 0,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }

    // Assign?? ?? course (Tous)
    postAssignToCourseAll(nom_user : string, id_coloc : number, user_receive : string, id_user_send : number, id_user_receive : number ){

      let data = {
        id_notif : 0,
        nom_notif : 'Assignation course',
        desc_notif : nom_user + " a assign?? " + user_receive + " ?? faire les courses",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : id_user_send,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }

    // Assign?? ?? "Tache" (Perso)
    postAssignToTache(id_coloc : number, id_user_receive : number){

      let data = {
        id_notif : 0,
        nom_notif : 'Assignation tache user',
        desc_notif : "Vous avez ete assign?? ?? faire une tache",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : 0,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }

    // Assign?? ?? "Tache" (Tous)
    postAssignToTacheAll(nom_user : string, id_coloc : number, user_receive : string, id_user_receive : number ){

      let data = {
        id_notif : 0,
        nom_notif : 'Assignation tache',
        desc_notif : nom_user + " a assign?? " + user_receive + " ?? une tache",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : id_coloc,
        id_user_send : 0,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }
    

    // Refus?? dans colocation
    postRefuseToColoc(id_user_receive : number){

      let data = {
        id_notif : 0,
        nom_notif : 'Assignation tache',
        desc_notif : "Vous avez ete refus?? dans la colocation",
        date_creation_notif : new Date,
        is_read : false,
        id_coloc : 0,
        id_user_send : 0,
        id_user_receive : id_user_receive
      }

      return this.http.post(this.baseUrl+"notification", data)
      .subscribe(
        async (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
      }

      // Modification tache

      // Modification stock

      // Modification course
      
    
    /* ================= Update ================= */

    put(id : number, data : Notification){
      return this.http.put(this.baseUrl+`notification/${id}`, data).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    }

    delete(id : number){
      return this.http.delete(this.baseUrl+"notification");
    }
}
