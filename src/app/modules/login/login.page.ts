import { Component, inject } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { OnboardingModalComponent } from '../modals';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonListHeader, IonItem, IonLabel, IonFooter,
    LoginFormComponent,
    OnboardingModalComponent
  ]
})
export class LoginPage {
  globals: GlobalsServices = inject(GlobalsServices);

  ionViewWillEnter() {
    this.globals.openModal('walkthroughmodal');
  }

}
