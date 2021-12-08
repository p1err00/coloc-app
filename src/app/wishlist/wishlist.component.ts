import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { SitesService } from '../services/sites.service';
import { Observable } from 'rxjs';

import { Sites } from '../models/sites';
import { Wishlist } from '../models/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  sites : Sites[] = [];
  wishlist : Wishlist[] = [];

  constructor(
    private serverWishlist : WishlistService,
    private serverSites : SitesService
  ) { }

  ngOnInit(): void {
    this.getSites();
    this.getWishlist();
  }

  //Get sites
  getSites(){
    this.serverSites.getAll().subscribe(resp => {
      this.sites = resp;
    });
  }

  getWishlist(){
    this.serverWishlist.getAll().subscribe(resp => {
      this.wishlist = resp;
    })
  }
}
