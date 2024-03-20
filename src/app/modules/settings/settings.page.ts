import { Component, OnInit } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonAvatar, IonButton, IonCard, IonCheckbox, IonContent, IonFabButton, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonRadio, IonRadioGroup, IonToggle } from '@ionic/angular/standalone';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    TitleCasePipe,
    IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonAvatar, IonFabButton, IonToggle, IonIcon, IonImg, IonItem, IonAccordion, IonAccordionGroup, IonRadioGroup, IonRadio,
    FormsModule
  ]
})
export class SettingsPage  extends SettingsService implements OnInit {

  ngOnInit() {
  }

}
