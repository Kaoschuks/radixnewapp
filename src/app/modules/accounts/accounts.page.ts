import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './services/accounts.service';
import { IonCard, IonContent, IonLabel, IonRefresher, IonRefresherContent, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/angular/standalone';
import { AccountsCardsComponent } from './components';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoadingComponent, NoContentComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonRefresher, IonRefresherContent, IonSegment, IonSegmentButton, IonToolbar, IonLabel, IonCard,
    AccountsCardsComponent, NoContentComponent, LoadingComponent,
    AsyncPipe,
    NgIf
  ]
})
export class AccountsPage extends AccountsServices implements OnInit {
  
  async ngOnInit() {
    this.loading.next(true);
    await this.getAccounts(null);
  }

}
