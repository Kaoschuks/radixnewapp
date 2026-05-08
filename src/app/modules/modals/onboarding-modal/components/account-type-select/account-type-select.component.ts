import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { briefcaseOutline, personOutline, chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'account-type-select',
  templateUrl: './account-type-select.component.html',
  styleUrls: ['./account-type-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonIcon]
})
export class AccountTypeSelectComponent {
  @Output() selected = new EventEmitter<'ppp' | 'rsa'>();
  @Output() back = new EventEmitter<void>();

  constructor() {
    addIcons({ briefcaseOutline, personOutline });
  }

  select(type: 'ppp' | 'rsa') {
    this.selected.emit(type);
  }
}
