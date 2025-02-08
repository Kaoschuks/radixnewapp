import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonButtons, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar, IonContent, IonFooter } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterService } from './services/register.service';
import { CommonModule } from '@angular/common';
import { OnboardingModalComponent } from '../modals';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonListHeader, IonItem, IonLabel, IonFooter,
    RegisterFormComponent, OnboardingModalComponent,
    RouterModule
  ]
})
export class RegisterPage extends RegisterService {

  goback() {
    console.log("test")
    this.globals.openModal('walkthroughmodal')
  }
}
