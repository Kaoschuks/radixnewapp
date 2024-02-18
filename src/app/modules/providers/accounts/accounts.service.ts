import { Injectable } from '@angular/core';
import { GlobalsProvider } from '../../core/globals';
import { RequestProvider } from '../../core/request';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  loader: boolean = false
  accounts: Array<any> = []
  trans: any = {
    "Credit": 0.00,
    "Debit": 0.00
  }
  transactions: Array<any> = []
  bal: number = 0
  constructor(
    private _globals: GlobalsProvider,
    private _api: RequestProvider
  ) { }

  async get_accounts(type: string = 'GetRSABal') {
    return await new Promise((resolve, reject) => {
      this.loader = true;
      try{

        this._api.get(`AccountsTrans/${type}/${this._globals.config.pin}`).then((res: any) => {
          this.loader = false;
          resolve(res);
        }).catch((ex: any) => {
          this.loader = false;
          reject(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        this.loader = false;
        reject(ex.message || ex.error || ex)
      }
    })
  }

  async get_transactions() {
    return await new Promise((resolve, reject) => {
      this.loader = true;
      try{
        this._api.get(`AccountsTrans/GetAllActTrans/${this._globals.config.pin}`).then((res: any) => {
          if(!res || res.length == 0 ) reject("Transactions not found in database");

          this.loader = false;
          this.transactions = res
          this.trans.Credit = this.trans.Debit = 0.00
          res.Result.forEach((trans: any) => {
            this.trans[trans.STATUS] += parseFloat(trans.RSA_CONTRIBUTION.split(',').join(''));
            this.trans[trans.STATUS] += parseFloat(trans.VOLUNTARY_CONTRIBUTION.split(',').join(''));
          });
          resolve(res);
        }).catch((ex: any) => {
          this.loader = false;
          reject(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        this.loader = false;
        reject(ex.message || ex.error || ex)
      }
    })
  }
}
