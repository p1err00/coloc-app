import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-home',
  templateUrl: './budget-home.component.html',
  styleUrls: ['./budget-home.component.scss']
})
export class BudgetHomeComponent implements OnInit {

  useComponent : string = '';

  constructor() { }

  ngOnInit(): void {
    this.useComponent = 'remboursement';

  }

  next(){
    
    if(this.useComponent == 'remboursement'){
      this.useComponent = 'depense';
      return;
    }

    if(this.useComponent == 'depense'){
      this.useComponent = 'abonnement';
      return;
    }
    
    if(this.useComponent == 'abonnement'){
      this.useComponent = 'remboursement';
      return;
    }
  }

  prev(){
    if(this.useComponent == 'remboursement'){
      this.useComponent = 'abonnement';
      return;
    }

    if(this.useComponent == 'depense'){
      this.useComponent = 'remboursement';
      return;
    }
    
    if(this.useComponent == 'abonnement'){
      this.useComponent = 'depense';
      return;
    }
  }
}
