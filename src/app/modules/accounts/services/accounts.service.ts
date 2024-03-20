import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalsServices, AccountsService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsServices {
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);

  loading = new BehaviorSubject<boolean>(false);

  accounts: any = {
    rsaaccounts: [],
    volaccounts: []
  }


  async getAccounts(event: any, pageRefresh: boolean = false) {
    try {
      this.globals.pageRefresh = pageRefresh;
      event?.target?.complete();
      const [rsaaccounts, volaccounts]:  any = await Promise.all([
        await this._accountservice.get_accounts(),
        await this._accountservice.get_accounts('GetVolBal')
      ])

      if(rsaaccounts && rsaaccounts.length > 0) rsaaccounts[0]['transactions'] = await this.getAccoutTransaction();
      if(volaccounts && volaccounts.length > 0) volaccounts[0]['transactions'] = await this.getAccoutTransaction('GetVolActTrans');

      this.accounts.rsaaccounts = rsaaccounts;
      this.accounts.volaccounts = volaccounts;
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

  async openAccount(account: any) {
    this._accountservice.openAccount(account);
  }
}
