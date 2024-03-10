import { Injectable, inject } from '@angular/core';
import { GlobalsServices, RequestService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  _globals: GlobalsServices = inject(GlobalsServices);
  _api: RequestService = inject(RequestService);

  trans: any = {
    "Credit": 0.00,
    "Debit": 0.00
  }
  bal: number = 0

  async get_accounts(type: string = 'GetRSABal') {
    return await new Promise(async (resolve, reject) => {
      try {
        const resp: any = await this._api.get(`AccountsTrans/${type}/${this._globals.config.pin}`);
        this.getBalance(resp.Result || resp)

        resolve(resp.Result || resp)
      } catch(ex: any) {
        reject(ex.message || ex.error || ex)
      }
    })
  }

  async get_transactions() {
    return await new Promise(async (resolve, reject) => {
      try{
        const resp: any = await this._api.get(`AccountsTrans/GetAllActTrans/${this._globals.config.pin}`)
        if(!resp || resp.length == 0 ) throw new Error("Transactions not found in database");

        this.getBalance(resp.Result || resp || [])
        this.getTransactionBalance(resp.Result || resp || [])

        resolve(resp.Result || resp);
      }catch(ex: any) {
        reject(ex.message || ex.error || ex)
      }
    })
  }

  private getBalance(accounts: any) {
    accounts.forEach((acct: any) => {
      if(acct.RSABAL) this.bal += parseFloat(acct.RSABAL);
      if(acct.VOLBAL) this.bal += parseFloat(acct.VOLBAL.split(',').join(''));
    });
  }

  private getTransactionBalance(transactions: any) {
    this.trans.Credit = this.trans.Debit = 0.00
    transactions.forEach((trans: any) => {
      this.trans[trans.STATUS] += parseFloat(trans.RSA_CONTRIBUTION.split(',').join(''));
      this.trans[trans.STATUS] += parseFloat(trans.VOLUNTARY_CONTRIBUTION.split(',').join(''));
    });
  }
}
