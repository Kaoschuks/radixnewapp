import { Component, inject } from '@angular/core';
import {
  IonHeader, IonToolbar, IonContent, IonButtons, IonButton,
  IonListHeader, IonLabel, IonItem, IonFooter
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { RegisterRsaFormComponent } from './components/register-rsa-form/register-rsa-form.component';
import { RegisterService } from '../register/services/register.service';

@Component({
  selector: 'app-register-rsa',
  templateUrl: './register-rsa.page.html',
  styleUrls: ['./register-rsa.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton,
    IonListHeader, IonLabel, IonItem, IonFooter,
    RouterModule, RegisterRsaFormComponent
  ]
})
export class RegisterRsaPage extends RegisterService {

  goBack() {
    this.globals.navigate('/register', false);
  }
}
