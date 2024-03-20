import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { IonCard, IonContent, IonLabel, IonListHeader } from '@ionic/angular/standalone';
import { AccountsService, GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { AccountInfoComponent, TransactionListsComponent } from '../../accounts/components';

@Component({
  selector: 'accounts-details-modal',
  templateUrl: './accounts-details-modal.component.html',
  styleUrls: ['./accounts-details-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent, TransactionListsComponent, AccountInfoComponent, IonContent, IonCard, IonListHeader, IonLabel]
})
export class AccountsDetailsModalComponent {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);
}
