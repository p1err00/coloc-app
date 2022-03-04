import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { Wishlist } from 'src/app/models/wishlist';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Payment } from '../models/payment.model';
import Section_budget from '../models/section_budget.model';
import { DepenseService } from '../services/depense.service';
import { SectionBudgetPaymentService } from '../services/section-budget-payment.service';
import { SectionBudgetService } from '../services/section-budget.service';
import { ModalAddDepenseComponent } from './modals/modal-add-depense/modal-add-depense.component';
import { ModalDeleteDepenseComponent } from './modals/modal-delete-depense/modal-delete-depense.component';
import { ModalMultiplePaymentComponent } from './modals/modal-multiple-payment/modal-multiple-payment.component';
import { ModalPayedComponent } from './modals/modal-payed/modal-payed.component';
import { ModalTransfertComponent } from './modals/modal-transfert/modal-transfert.component';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {

  @Input() currentUser !: User;


  payments: Payment[] = [];
  payment_do: Payment[] = [];
  payment_not_do: Payment[] = [];
  wishlist: Wishlist[] = [];
  users: User[] = [];
  section_budgets: Section_budget[] = [];

  nbPaymentNotDo: number = 0;
  totalAmountPayementNotDo: number = 0;

  nbPayementDo: number = 0;
  totalAmountPayementDo: number = 0;

  sectionMap : Map<Section_budget, Payment[]> = new Map();


  constructor(
    private depenseService: DepenseService,
    private modalService: NgbModal,
    private wishlistService: WishlistService,
    private authService: AuthService,
    public alertService: AlertService,
    private section_budgetService: SectionBudgetService,
    private section_budget_paymentService : SectionBudgetPaymentService
  ) { }

  ngOnInit(): void {
    this.getNotPayed();
    this.getAlreadyPayed();
    this.getWishlist();
    this.getUsers();
    this.getSectionBudget();
  }

  getSectionBudget() {
    setTimeout(() => {

      this.section_budgetService.getAll(this.currentUser.id_user).toPromise().then(resp => {
        this.section_budgets = resp;

        for(let section of this.section_budgets){
          // TODO section budget
          // this.section_budget_paymentService
        }
      });
    }, 200);
    
  }

  getNotPayed() {
    setTimeout(() => {
      this.depenseService.getNotPayed(this.currentUser.id_user).toPromise().then(resp => {

        for (let res of resp) {
          this.totalAmountPayementNotDo += res.amount;
        }

        this.payment_not_do = resp;
        this.nbPaymentNotDo = resp.length;
      });
    }, 200);
  }

  getAlreadyPayed() {

    setTimeout(() => {
      this.depenseService.getAlreadyPayed(this.currentUser.id_user).toPromise().then(resp => {

        for (let res of resp) {
          this.totalAmountPayementDo += res.amount;
        }

        this.payment_do = resp;
        this.nbPayementDo = resp.length;
      });
    }, 200);
  }

  getUsers() {
    this.authService.getAll(/* this.currentUser.id_coloc */).subscribe(resp => {
      this.users = resp;
    });
  }

  getWishlist() {
    this.wishlistService.getAll().subscribe(resp => {
      this.wishlist = resp;
    })
  }

  openAddDepenseModal() {
    const modalRef = this.modalService.open(ModalAddDepenseComponent, {
      windowClass: 'modalStock'
    });

    // Set wish list 
    modalRef.componentInstance.wish_list = this.wishlist;
    modalRef.componentInstance.users = this.users;

    modalRef.componentInstance.event.subscribe((item: any) => {
      let hash = (+new Date).toString(36);

      if (item.list_user.length == []) {
        for (let user of item.list_user) {

          let payment: Payment = {
            id: 0,
            nom: item.nom,
            amount: item.amout,
            link: item.link,
            id_user: user.id_user,
            is_payed: false,
            is_multiple_payment: true,
            multiple_code: hash,
            date_creation: new Date,
            date_payment: new Date
          }
          console.log(payment);

          this.depenseService.create(payment);    // TODO AJout dans la bdd
          this.alertService.showSuccess('Depense', 'Une nouvelle depense a ete ajoutée');
        }

      } else {
        console.log('nok tra mere');

        let payment: Payment = {
          id: 0,
          nom: item.nom,
          amount: item.amout,
          link: item.link,
          id_user: this.currentUser.id_user,
          is_payed: false,
          is_multiple_payment: true,
          multiple_code: hash,
          date_creation: new Date,
          date_payment: new Date
        }

        this.depenseService.create(payment);
        this.alertService.showSuccess('Depense', 'Une nouvelle depense a ete ajoutée');
      }
    });
  }

  openPayedModal() {
    const modalRef = this.modalService.open(ModalPayedComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item: any) => {
      console.log(item);

    });
  }

  openMultiplePaymentModal() {
    const modalRef = this.modalService.open(ModalMultiplePaymentComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item: any) => {
      console.log(item);

    });
  }

  openTransfertPayment() {
    const modalRef = this.modalService.open(ModalTransfertComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item: any) => {
      console.log(item);

    });
  }

  openDeletePayment() {
    const modalRef = this.modalService.open(ModalDeleteDepenseComponent, {
      windowClass: 'modalStock'
    });

    modalRef.componentInstance.event.subscribe((item: any) => {
      console.log(item);

    });
  }
}
