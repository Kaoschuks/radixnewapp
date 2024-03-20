import { CurrencyPipe, NgFor, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';
import { TransactionListsComponent } from '../../transactions/transaction-lists/transaction-lists.component';

@Component({
  selector: 'accounts-cards',
  templateUrl: './accounts-cards.component.html',
  styleUrls: ['./accounts-cards.component.scss'],
  standalone: true,
  imports: [
    IonItem, IonLabel, IonCard, IonNote,
    TransactionListsComponent,
    TitleCasePipe, CurrencyPipe, UpperCasePipe,
    NgFor, NgIf
  ]
})
export class AccountsCardsComponent  implements OnInit {

  @Input() loader: any = false
  @Input() accounts: any
  @Input() currency!: string
  @Output() selectedAccount: any = new EventEmitter();

  limit: number = 3

  ngOnInit() {}

  showAll(length: number = 0) {
    this.limit = (this.limit == length) ? 3 : length
  }
}
