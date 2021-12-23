import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/stock';
import { ServerStockService } from 'src/app/services/server-stock.service';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.scss']
})
export class StockHomeComponent implements OnInit {

  stocks: Stock[] = [];


  constructor(
    private router: Router,
    private serverStock: ServerStockService,

  ) { }

  ngOnInit(): void {
    this.getStock();

  }

  getStock() {
    this.serverStock.getAll().toPromise().then(resp => {
      for (let i = 0; i < 5; i++) {
        this.stocks.push(resp[i]);
      }
    });
  }

  redirectStock() {
    this.router.navigate(['/stock'])
  }
}
