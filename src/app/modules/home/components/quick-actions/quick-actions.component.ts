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
      link: 'https://online.radixpension.com/datarecapture/',
      icon: 'ri-arrow-left-right-line'
    },
    {
      action: 'none',
      label: 'Client <br /> Update',
      link: 'https://online.radixpension.com/RadixSelfServices/',
      icon: 'ri-file-text-line'
    },
    {
      action: 'branchesmodal',
      label: 'Branch<br /> Locator',
      icon: 'ri-map-2-line'
    },
    {
      action: 'employment',
      label: 'Employer<br /> Information',
      icon: 'fi fi-rr-portrait'
    },
    {
      action: 'livechatmodal',
      label: 'Live<br /> Chat',
      icon: 'fi fi-rr-handshake'
    },
    {
      action: 'statementmodal',
      label: 'Generate<br /> Statement',
      icon: 'ri-file-zip-line'
    },
    {
      action: 'investmentoptionsmodal',
      label: 'Investment<br /> Options',
      icon: 'fi fi-rr-coin-up-arrow'
    },
    {
      action: 'app',
      link: '/accounts',
      label: 'Transaction<br /> History',
      icon: 'fi fi-ss-chart-user'
    },
    {
      action: 'app',
      link: '/micropensions',
      label: 'Micro<br /> Pensions',
      icon: 'fi fi-ss-hands-holding-diamond'
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
