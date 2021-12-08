import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  matchPassword: boolean = false;

  //Show alert
  alertUsername = false;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private datePipe: DatePipe
  ) {

    //Create form with conditions
    this.signupForm = this.fb.group({
      sexe_user: ['', Validators.required],
      lastname_user: ['', [
        Validators.required,
        Validators.pattern("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u")
      ]],
      firstname_user: ['', [
        Validators.required,
        Validators.pattern("/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u")
      ]],
      username_user: ['', Validators.required],
      date_of_birth_user: ['', [
        //Validators.required,
        Validators.pattern("/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g")
      ]],
      email_user: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$'),
      ]],
      password_user: ['', [
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
      ]],
      cmdp: ['', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
      ]],

      tel_user: ['', [
        Validators.required,
        //Validators.pattern("/^(?:(?:\+|00)33|0)s*[1-9](?:[\s.-]*\d{2}){4}$/")
      ]]
    }, {Validators :this.passwordMatchValidator } );
  }

  ngOnInit(): void {
  }


  //Getter
  get sexe_user() {return this.signupForm.get('sexe_user'); }
  get firstname_user() {return this.signupForm.get('firstname_user'); }
  get lastname_user() {return this.signupForm.get('lastname_user'); }
  get username_user() {return this.signupForm.get('username_user'); }
  get date_of_birth_user() {return this.signupForm.get('date_of_birth_user'); }
  get email_user() {return this.signupForm.get('email_user'); }
  get password_user() {return this.signupForm.get('password_user'); }
  get cmdp() {return this.signupForm.get('cmdp'); }
  get tel_user() {return this.signupForm.get('tel_user'); }

  registerUser() {

    this.convertDate();

    if (this.signupForm.dirty && this.signupForm.valid) {
      this.authService.signUp(this.signupForm.value).subscribe((res) => {
        console.log(res);
        if (res.result) {
          this.signupForm.reset();
          this.router.navigate(['log-in']);
        }
      });
      
    } else {
      console.log(this.signupForm.errors);
      console.log(this.signupForm.dirty);
      
    }
  }

  //Test paswword and confirm password
  passwordMatchValidator(){
    return this.password_user === this.cmdp ? null : {notSame : true};
  }
  
  convertDate() {
    this.signupForm.value.date_of_birth = this.datePipe.transform(this.signupForm.value.date_of_birth, 'yyyy-mm-dd');
  }

  //Test username doesn't exist
  checkUsername() : Boolean{
    let bool : Boolean = false;
    this.authService.getAll().subscribe( resp => {
      for(let res of resp){
        console.log( res.username_user);
        
        if(this.username_user?.value == res.username_user){
          bool = true;
          console.log('true');
          this.alertUsername = true;
          return;
          
        } else {
          bool = false;
          console.log('false');
          this.alertUsername = false;
        }
      }
    });
    return bool;
  }
}
