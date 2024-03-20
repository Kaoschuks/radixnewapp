import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'accounts-lists',
  templateUrl: './accounts-lists.component.html',
  styleUrls: ['./accounts-lists.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class AccountsListsComponent {

  @Input() accounts: Array<any> = []
  @Input() loader: any = false
  @Input() currency!: string
  @Output() onclick: any = new EventEmitter();


}
