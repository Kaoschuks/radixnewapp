import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalsServices, AccountsService, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);
  _userservice: UserService = inject(UserService);

  loading = new BehaviorSubject<boolean>(false);

  accounts: any = {
    rsaaccounts: [],
    volaccounts: []
  }
  transactions: any = []


  async getAccounts(event: any, pageRefresh: boolean = false) {
    try {
      this.globals.pageRefresh = pageRefresh;
      event?.target?.complete();


    this._accountservice.bal = 0;
      const [rsaaccounts, volaccounts, transactions]: any = await Promise.all([
        await this._accountservice.get_accounts(),
        await this._accountservice.get_accounts('GetVolBal'),
        await this._accountservice.get_transactions()
      ])

      if(rsaaccounts && rsaaccounts.length > 0) rsaaccounts[0]['transactions'] = await this.getAccoutTransaction();
      if(volaccounts && volaccounts.length > 0) volaccounts[0]['transactions'] = await this.getAccoutTransaction('GetVolActTrans');

      this.accounts.rsaaccounts = rsaaccounts;
      this.accounts.volaccounts = volaccounts;
      this.transactions = transactions;
      this.globals.pageRefresh = false
      this.loading.next(false);

    } catch (error: any) {
      this.globals.pageRefresh = false
      this.loading.next(false);
      this.globals.toastAlert(error, {
        cssClass: 'toast-danger'
      })
    }
  }

  private async getAccoutTransaction(type: string = 'GetActTrans') {
    return await this._accountservice.get_accounts(type)
  }

  async openQuickAction(product: any) {
    const name: string = product.label.replace('<br />', '');
    this.globals.modalData.title = name
    await this.globals.toastAlert(`${name} feature not activated yet`, {
      duration: 10000
    })
    // this.globals.openModal('actionmodal');
  }

  openTransactions() {
    this.globals.modalData['transactions'] = this.transactions
    this.globals.openModal('transactionsmodal');
  }
}
