import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  
  alertBadSignin: boolean = false;
  alertBadAccount: boolean = false;
  backgroundName = true;
  backgroundPassword = true;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public alertService : AlertService
  ) {
    this.signinForm = this.fb.group({
      username_user: [''],
      password_user: ['']
    })
  }

  ngOnInit() { 
    //this.isLogged();
  }

  // Getter form
  get username_user(){return this.signinForm.get('username_user');}
  get password_user(){return this.signinForm.get('password_user');}

  // ! Eviter la deconnexion au rechargement + connexion automatique
  isLogged(){
    let token = this.authService.getDecodedAccessToken();
    console.log(token);
    
    this.authService.getUserProfile(token);
    this.authService.signIn(token);
  }

  loginUser() {

    Object.keys(this.signinForm.controls).forEach(key => {

      console.log(this.signinForm.errors);
    })
    if (this.signinForm.dirty && this.signinForm.valid) {
      
      
      this.authService.signIn(this.signinForm.value).closed == false;
    }
  }

  signup() {
    this.router.navigate(['sign-up']);
  }
}
