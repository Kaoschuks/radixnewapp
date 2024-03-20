import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonListHeader, IonNote, IonRow } from '@ionic/angular/standalone';
import { AccountsService, GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { TransactionListsComponent } from '../../accounts/components';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonContent, IonListHeader, TransactionListsComponent, IonButton, IonLabel, IonItem, IonCard, IonNote,
    FullModalComponent, CurrencyPipe
  ]
})
export class TransactionModalComponent implements OnChanges {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);

  chartdata: any = [
    {
      name: "Expenses",
      value: 66,
      color: "#ff6384",
    },
    {
      name: "Income",
      value: 14,
      color: "#ff9f40",
    }
  ]

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this._accountservice.bal)
    // console.log(this._accountservice.trans)
  }
}
