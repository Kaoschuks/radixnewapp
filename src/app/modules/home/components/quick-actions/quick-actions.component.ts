import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonCard, IonCol, IonFabButton, IonGrid, IonLabel, IonListHeader, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
  standalone: true,
  imports: [IonFabButton, IonLabel, IonRow, IonGrid, IonCol, IonCard, IonListHeader, NgFor, NgClass]
})
export class QuickActionsComponent {

  @Output() onSelect: any = new EventEmitter()
  products: any[] = [
    {
      class: 'bg',
      label: 'Self<br /> Service',
      icon: 'ri-smartphone-line'
    },
    {
      label: 'Data<br /> Recapture',
      icon: 'ri-arrow-left-right-line'
    },
    {
      label: 'Client <br /> Update',
      icon: 'ri-file-text-line'
    },
    {
      label: 'Branch<br /> Locator',
      icon: 'ri-map-2-line'
    },
    {
      label: 'Generate<br /> Statement',
      icon: 'ri-file-zip-line'
    },
    {
      label: 'Pension<br /> Calculator',
      icon: 'ri-calculator-line'
    },
  ]
  constructor() { }

}
