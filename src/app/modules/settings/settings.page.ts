import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonCard, IonContent, IonFabButton, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonToggle } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    TitleCasePipe,
    IonContent, IonButton, IonListHeader, IonLabel, IonList, IonCard, IonAvatar, IonFabButton, IonToggle, IonIcon, IonImg, IonItem,
    FormsModule
  ]
})
export class SettingsPage implements OnInit {
  globals: GlobalsServices = inject(GlobalsServices);

  ngOnInit() {
  }

  onDeleteAccount() {
    this.globals.modalData = {
      title: 'Are you sure',
      color: 'danger',
      iconName: 'alert-circle-outline',
      description:
        'Your account will be permanently deleted, do you want to proceed ?',
      buttons: [
        {
          action: 'no',
          text: 'No, Cancel',
        },
        {
          action: 'deleteaccount',
          text: 'Yes, Delete Account',
        },
      ],
    };
    this.globals.openModal('successmodal')
  }

  onLogout() {
    this.globals.modalData = {
      title: 'Logging Out?',
      color: 'danger',
      iconName: 'alert-circle-outline',
      description:
        'Your account will be permanently deleted, do you want to proceed ?',
      buttons: [
        {
          action: 'no',
          text: 'No, Cancel',
        },
        {
          action: 'logout',
          text: 'Yes, Log Out',
        },
      ],
    };
    this.globals.openModal('successmodal')
  }

}
