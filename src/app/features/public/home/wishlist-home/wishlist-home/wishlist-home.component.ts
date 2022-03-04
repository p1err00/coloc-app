import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/wishlist';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist-home',
  templateUrl: './wishlist-home.component.html',
  styleUrls: ['./wishlist-home.component.scss']
})
export class WishlistHomeComponent implements OnInit {

  wishlist : Wishlist[] = [];

  
  constructor(
    private serverWishlist : WishlistService,

  ) { }

  ngOnInit(): void {
    this.getWishlist();
  }


  getWishlist(){
    this.serverWishlist.getAll().subscribe(resp => {
      this.wishlist = resp;
      console.log(resp);
      
    })
  }
}
