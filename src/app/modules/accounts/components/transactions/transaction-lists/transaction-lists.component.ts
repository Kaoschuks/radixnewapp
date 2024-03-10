import { Component, OnInit } from '@angular/core';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { AccountsService } from 'src/app/providers/features/accounts/accounts.service';

@Component({
  selector: 'transaction-lists',
  templateUrl: './transaction-lists.component.html',
  styleUrls: ['./transaction-lists.component.scss'],
})
export class TransactionListsComponent implements OnInit {

  loader: boolean = true;
  transactions: any = []
  constructor(
    public _acctservices: AccountsService
  ) { }

  ngOnInit() {
    this._acctservices.get_transactions()
  }

  toNumber(str: string = "0") {
    return Number(parseInt(str));
  }

}
