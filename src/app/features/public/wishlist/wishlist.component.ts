import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';
import { SitesService } from '../../../services/sites.service';
import { Observable } from 'rxjs';

import { Sites } from '../../../models/sites';
import { Wishlist } from '../../../models/wishlist';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddComponent } from './modals/modal-add/modal-add.component';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { AlertService } from 'src/app/services/alert.service';
import { ModalDeleteWishlistComponent } from './modals/modal-delete-wishlist/modal-delete-wishlist.component';
import { ModalModifyWishlistComponent } from './modals/modal-modify-wishlist/modal-modify-wishlist.component';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  currentUser !: User;

  wishlist : Wishlist[] = [];

  constructor(
    private serverWishlist : WishlistService,
    private modalService : NgbModal,
    private authService : AuthService,
    private alertService : AlertService
    
  ) { 
    let tokenInfo = this.getDecodedAccessToken(JSON.stringify(localStorage.getItem("access_token")));

    let id = tokenInfo.id;

    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist(){
    this.serverWishlist.getAll().subscribe(resp => {
      this.wishlist = resp;
    })
  }

  openModalAdd(){
    const modalRef = this.modalService.open(ModalAddComponent,{
      windowClass : 'modalStock'
    });


    modalRef.componentInstance.event.subscribe((item : Wishlist) => {
      let wish : Wishlist = {
        id_w : 0,
        nom_w : item.nom_w,
        prix_w : item.prix_w,
        url_w : item.url_w,
        desc_w : item.desc_w,
        id_user : this.currentUser.id_user
      }
      console.log(item);
      console.log(wish);
      
      this.serverWishlist.create(wish);
      this.wishlist.push(wish);
      this.alertService.showSuccess('Succes', 'Whish ajouté avec succès');

    });
  }

  openDeleteModal(item : Wishlist){
    const modalRef = this.modalService.open(ModalDeleteWishlistComponent, {
      windowClass : 'modalWishlit'
    });

    modalRef.componentInstance.fromParent = item;

    modalRef.componentInstance.event.subscribe( (item : Wishlist) => {

      this.serverWishlist.delete(item.id_w);
      this.wishlist.splice(this.wishlist.indexOf(item), 1);
      this.alertService.showSuccess('Succès','Wish supprimé avec succès')
    });
  }

  openModalModif(item : Wishlist){
    const modalRef = this.modalService.open(ModalModifyWishlistComponent,{
      windowClass : 'modalStock'
    });
    console.log(item);

    modalRef.componentInstance.fromParent = item;

    modalRef.componentInstance.event.subscribe((item : Wishlist) => {

      let wish : Wishlist = {
        id_w : item.id_w,
        nom_w : item.nom_w,
        prix_w : item.prix_w,
        url_w : item.url_w,
        desc_w : item.desc_w,
        id_user : this.currentUser.id_user
      }

      console.log(wish);
      
      this.serverWishlist.update(wish.id_w, wish);
      this.wishlist.push(wish);
      this.alertService.showSuccess('Tache', 'Tache modifier avec succès');
    });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }
}
