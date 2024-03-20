import { CurrencyPipe, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonBadge, IonButton, IonCard, IonCol, IonFabButton, IonItem, IonLabel, IonListHeader, IonNote, IonRow } from '@ionic/angular/standalone';
import { AccountsListsComponent } from 'src/app/modules/accounts/components/accounts/accounts-lists/accounts-lists.component';
import { NoContentComponent } from 'src/app/shared/components';
import { QuickActionsComponent } from '../../../../home/components/quick-actions/quick-actions.component';
import { ShortNumberPipe } from 'src/app/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'account-portfolio',
  templateUrl: './account-portfolio.component.html',
  styleUrls: ['./account-portfolio.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ 
    IonCard,IonItem, IonBadge, IonLabel, IonListHeader, IonFabButton, IonNote, IonRow, IonCol, IonButton, 
    AccountsListsComponent, QuickActionsComponent, NoContentComponent,
    CurrencyPipe, TitleCasePipe, ShortNumberPipe, UpperCasePipe,
    NgIf,
    RouterModule
  ]
})
export class AccountPortfolioComponent {

  @Input() currency!: string
  @Input() balance!: any
  @Input() accounts: any
  @Input() accountNumber!: string
  @Input() source!: string
  @Input() loader: any = false
  @Output() onclick: any = new EventEmitter();
  @Output() selectedAccount: any = new EventEmitter();
  @Output() onViewTransaction: any = new EventEmitter();
}
