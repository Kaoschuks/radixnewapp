import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AccountPortfolioComponent } from '../accounts/components/accounts/account-portfolio/account-portfolio.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { HomeService } from './services/home.service';
import { AccountsCardsComponent, TransactionListsComponent } from '../accounts/components';
import { AccountsListsComponent } from '../accounts/components/accounts/accounts-lists/accounts-lists.component';
import { CircleProgressModule, NoContentComponent } from 'src/app/shared/components';
import { CircleProgressComponent } from 'src/app/shared/components/circle-progress/circle-progress.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CircleProgressModule, CircleProgressComponent,
    IonicModule, CommonModule, AsyncPipe,
    AccountPortfolioComponent, QuickActionsComponent, TransactionListsComponent, AccountsListsComponent, AccountsCardsComponent, NoContentComponent
  ]
})
export class HomePage extends HomeService implements OnInit {
  
  async ngOnInit() {
    this.loading.next(true)
    await Promise.all([
      this.globals.changeStatusBarColor('#ffffff', false, false),
      this.getAccounts(null)
    ])
  }

  
}
