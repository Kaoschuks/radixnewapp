import { Component } from '@angular/core';
import { MobileLayoutComponent, SuccessModalComponent } from 'src/app/shared/components';
import { LowerCasePipe, NgIf } from '@angular/common';
import { ActionsModalComponent, GeneratestatementModalComponent, LanguageModalComponent, NotificationModalComponent, ProfileModalComponent } from '../modals';
import { AppService } from './services/app.service';
import { AccountsDetailsModalComponent } from '../modals/accounts-details-modal/accounts-details-modal.component';
import { TransactionModalComponent } from '../modals/transaction-modal/transaction-modal.component';
import { FeedbackModalComponent } from '../modals/feedback-modal/feedback-modal.component';
import { LivechatModalComponent } from '../modals/livechat-modal/livechat-modal.component';
import { SupportModalComponent } from '../modals/support-modal/support-modal.component';
import { InvestmentoptionsModalComponent } from '../modals/investmentoptions-modal/investmentoptions-modal.component';
import { ChangepasswordModalComponent } from '../modals/changepassword-modal/changepassword-modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    NgIf, LowerCasePipe,
    LanguageModalComponent, NotificationModalComponent, ProfileModalComponent, ActionsModalComponent, AccountsDetailsModalComponent,
    MobileLayoutComponent, SuccessModalComponent, TransactionModalComponent, FeedbackModalComponent, LivechatModalComponent, 
    SupportModalComponent, InvestmentoptionsModalComponent, ChangepasswordModalComponent, GeneratestatementModalComponent
  ],
})

export class TabsPage extends AppService {
}
