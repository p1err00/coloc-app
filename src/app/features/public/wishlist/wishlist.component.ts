import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';
import { SitesService } from '../../../services/sites.service';
import { Observable } from 'rxjs';

import { Sites } from '../../../models/sites';
import { Wishlist } from '../../../models/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist : Wishlist[] = [];

  constructor(
    private serverWishlist : WishlistService,
  ) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  //Get sites
  

  getWishlist(){
    this.serverWishlist.getAll().subscribe(resp => {
      this.wishlist = resp;
    })
  }
}
