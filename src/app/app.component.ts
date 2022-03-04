import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Coloc-action';
  currentUser !: User;

  constructor(
    private _authService: AuthService,
    public router: Router


  ) {
    this.router.navigate(['/log-in'])

  }

  async ngOnInit() {
    let tokenInfo = await this._authService.getDecodedAccessToken();

    let id = tokenInfo.id;

    this._authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }




}
