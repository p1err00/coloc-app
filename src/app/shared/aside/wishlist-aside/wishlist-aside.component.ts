import { Component, Input, OnInit } from '@angular/core';
import { Sites } from 'src/app/models/sites';
import { User } from 'src/app/models/user';
import { SitesService } from 'src/app/services/sites.service';

@Component({
  selector: 'app-wishlist-aside',
  templateUrl: './wishlist-aside.component.html',
  styleUrls: ['./wishlist-aside.component.scss']
})
export class WishlistAsideComponent implements OnInit {

  @Input() currentUser !: User;

  sites : Sites[] = [];

  constructor(
    private serverSites : SitesService
  ) { }

  ngOnInit(): void {
    this.getSites();

  }


  getSites(){
    this.serverSites.getAll().subscribe(resp => {
      this.sites = resp;
    });
  }
}
