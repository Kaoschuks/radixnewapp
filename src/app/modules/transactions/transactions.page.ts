import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { AccountsService } from '../../shared/services/accounts/accounts.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonContent, IonRefresher, IonRefresherContent]
})
export class TransactionsPage implements OnInit {
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);

  loading: boolean = false;

  accounts: any = {
    rsaaccounts: [],
    volaccounts: []
  }
  
  async ngOnInit() {
    this.loading = true;
    await this.getAccounts(null);
  }

  async getAccounts(event: any, pageRefresh: boolean = false) {
    try {
      this.globals.pageRefresh = pageRefresh;
      event?.target?.complete();
      const [rsaaccounts, volaccounts] = await Promise.all([
        await this._accountservice.get_accounts(),
        await this._accountservice.get_accounts('GetVolBal'),
      ])

      this.accounts.rsaaccounts = rsaaccounts
      this.accounts.volaccounts = volaccounts
      this.loading = this.globals.pageRefresh = false

    } catch (error: any) {
      this.loading = this.globals.pageRefresh = false
      this.globals.toastAlert(error, {
        cssClass: 'toast-danger'
      })
    }
  }

}
