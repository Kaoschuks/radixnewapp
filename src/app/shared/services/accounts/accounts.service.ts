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
  accountInfo: any;

  async get_accounts(type: string = 'GetRSABal') {
    return await new Promise(async (resolve, reject) => {
      try {
        let resp: any = await this._api.get(`AccountsTrans/${type}/${this._globals.config.pin}`);
        this.getBalance(resp.Result || resp)

        if(resp.Result) resp = resp.Result
        resp = resp.map((acct: any) => {
          acct.GROWTH = this.toNumber(acct.GROWTH)
          acct.RSACONTRIBUTION = this.toNumber(acct.RSACONTRIBUTION)
          acct.ACCOUNTTYPE = (type == 'GetRSABal') ? 'RSA Accounts' : 'Voluntary Accounts'
          acct.SIGNATURE = (type == 'GetRSABal') ? 'GetActTrans' : 'GetVolActTrans'
          return acct;
        })

        resolve(resp.Result || resp)
      } catch(ex: any) {
        reject(ex.message || ex.error || ex)
      }
    })
  }

  private toNumber(str: string = "0") {
    str = str.replace(",", '').replace(',', '')
    return parseFloat(str);
  }

  async get_transactions() {
    return await new Promise(async (resolve, reject) => {
      try{
        let resp: any = await this._api.get(`AccountsTrans/GetAllActTrans/${this._globals.config.pin}`)
        if(!resp || resp.length == 0 ) throw new Error("Transactions not found in database");

        if(resp.Result) resp = resp.Result
        resp = resp.map((transactions: any) => {
          transactions.RSA_CONTRIBUTION = this.toNumber(transactions.RSA_CONTRIBUTION);
          transactions.VOLUNTARY_CONTRIBUTION = this.toNumber(transactions.VOLUNTARY_CONTRIBUTION);
          return transactions;
        })

        // this.getBalance(resp || [])
        this.getTransactionBalance(resp || [])

        resolve(resp);
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
      this.trans[trans.STATUS] += trans.RSA_CONTRIBUTION;
      this.trans[trans.STATUS] += trans.VOLUNTARY_CONTRIBUTION;
    });
  }

  async openAccount(account: any) {
    this.accountInfo = account
    this._globals.openModal('accountsdetailsmodal');
    this.accountInfo['transactions'] =  await this.get_accounts(account.SIGNATURE);
  }
}
