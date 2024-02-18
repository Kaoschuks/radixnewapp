import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonListHeader, IonItem, IonLabel, IonFooter,
    RouterModule
  ]
})
export class ForgotPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
