import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonCard, IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'account-portfolio',
  templateUrl: './account-portfolio.component.html',
  styleUrls: ['./account-portfolio.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ IonCard,IonItem, IonLabel, IonNote, CurrencyPipe ]
})
export class AccountPortfolioComponent {

  @Input() currency!: string
  @Input() balance!: number

}
