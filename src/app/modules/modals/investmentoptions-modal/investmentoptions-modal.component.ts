import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { IonContent, IonCard } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { InvestmentsListsComponent } from './components/investments-lists/investments-lists.component';

@Component({
  selector: 'investmentoptions-modal',
  templateUrl: './investmentoptions-modal.component.html',
  styleUrls: ['./investmentoptions-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FullModalComponent, InvestmentsListsComponent
  ]
})
export class InvestmentoptionsModalComponent  implements OnInit {


  @Input({ required: true }) isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }

  ngOnInit() {}

}
