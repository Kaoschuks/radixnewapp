import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { GlobalsServices } from 'src/app/core';
import { AccountsService } from '../accounts/services/accounts/accounts.service';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonContent, IonRefresher, IonRefresherContent]
})
export class HomePage implements OnInit {
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
