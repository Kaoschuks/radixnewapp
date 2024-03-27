import { Component, inject } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { OnboardingModalComponent } from '../modals';
import { RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonListHeader, IonItem, IonLabel, IonFooter,
    LoginFormComponent, RouterModule,
    OnboardingModalComponent
  ]
})
export class LoginPage extends LoginService {
}
