import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccountPortfolioComponent } from '../accounts/components/accounts/account-portfolio/account-portfolio.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { HomeService } from './services/home.service';
import { TransactionListsComponent } from '../accounts/components';
import { AccountsListsComponent } from '../accounts/components/accounts/accounts-lists/accounts-lists.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, CommonModule, AsyncPipe,
    AccountPortfolioComponent, QuickActionsComponent, TransactionListsComponent, AccountsListsComponent
  ]
})
export class HomePage extends HomeService implements OnInit {
  
  async ngOnInit() {
    console.log(this.globals.config)
    this.loading.next(true)
    await this.getAccounts(null);
  }

  
}
