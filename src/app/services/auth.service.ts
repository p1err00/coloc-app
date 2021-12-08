import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Colocation } from '../models/colocation';
import { NotificationService } from './notification.service';
import { ColocationService } from './colocation.service';
import { DatePipe } from '@angular/common';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser !: User;
  baseUrl: string = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private httpNotif: NotificationService,
    private httpColoc: ColocationService,
    private datePipe: DatePipe,
    public alertService: AlertService,
    public router: Router
  ) { }



  // Sign-up
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-in
  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/signin`, user).subscribe(
      (val) => {


        localStorage.setItem('access_token', val.token)
        this.getUserProfile(val.result[0].id_user).subscribe(async (res) => {
          console.log('azeaze');

          this.currentUser = res;
          if (this.currentUser.id_coloc == 0) {
            alert('pas coloc')
            this.router.navigate(['/select-coloc']);

          } else {

            this.router.navigate(['/home']);
            this.alertService.showSuccess('Connexion reussi', 'Connexion reussi !');

          }
        });

      },
      response => {
        this.alertService.showError('Connexion refusée', 'Probleme de nom d\'utilisateur ou de mot de passe');

        return false
      },
      () => {
        console.log("The POST observable is now completed.");
      });

  }

  //Get user token
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  //Log out user
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(id: number): Observable<User> {
    let api = `${this.endpoint}/user-profil/${id}`;
    return this.http.get<User>(api, { headers: this.headers });
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  //Get all users
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`);
  }

  //! A bouger dans service notification
  sendNotifToColoc(idColoc: string, user: User) {
    let colocations: Colocation[] = [];
    this.http.get<Colocation[]>(this.baseUrl + "/colocation").subscribe(resp => {
      colocations = resp;

      //Loop on colocations and try if a coloc have same name of coloc request
      for (let coloc of colocations) {
        if (coloc.nom_coloc === idColoc) {
          console.log(coloc.id_coloc);

          this.httpColoc.getById(coloc.id_coloc).subscribe(resp => {

            console.log(resp);

            console.log(user);

            let notif = {
              id_notif: 0,
              nom_notif: "Demande ajout",
              desc_notif: "Demande d'ajout dans la coloc",
              date_creation_notif: new Date(),
              is_read: false,
              id_coloc: coloc.id_coloc,
              id_user: user.id_user
            }
            console.log();

            this.httpNotif.post(notif);

          })
        }
      }
    });
  }

  update(id: number, data: User) {
    console.log(data);

    return this.http.put(this.endpoint + `/update-user/${id}`, data).subscribe(
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
}
