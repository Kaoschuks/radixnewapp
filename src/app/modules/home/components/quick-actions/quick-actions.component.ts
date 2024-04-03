import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonCard, IonCol, IonFabButton, IonGrid, IonLabel, IonListHeader, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
  standalone: true,
  imports: [IonFabButton, IonLabel, IonRow, IonGrid, IonCol, IonCard, IonListHeader, NgFor, NgClass, RouterModule]
})
export class QuickActionsComponent {

  @Output() onSelect: any = new EventEmitter()
  products: any[] = [
    {
      action: 'none',
      label: 'Self<br /> Service',
      link: 'https://online.radixpension.com/RadixSelfServices/#!',
      icon: 'ri-smartphone-line'
    },
    {
      action: 'none',
      label: 'Data<br /> Recapture',
      link: 'https://online.radixpension.com/onboarding/',
      icon: 'ri-arrow-left-right-line'
    },
    {
      action: 'none',
      label: 'Client <br /> Update',
      link: 'https://online.radixpension.com/customer-service/client-update',
      icon: 'ri-file-text-line'
    },
    {
      action: 'branchlocator',
      label: 'Branch<br /> Locator',
      icon: 'ri-map-2-line'
    },
    {
      action: 'statementmodal',
      label: 'Generate<br /> Statement',
      icon: 'ri-file-zip-line'
    },
    {
      action: 'app',
      label: 'Pension<br /> Calculator',
      link: '/calculator',
      icon: 'ri-calculator-line'
    },
  ]
  constructor() { }

}
