import { Component, OnInit, inject } from '@angular/core';
import { IonButton, IonButtons, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar, IonContent, IonFooter } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { GlobalsServices, registerModel } from 'src/app/core';
import { UserService } from '../../shared/services/users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonListHeader, IonItem, IonLabel, IonFooter,
    RegisterFormComponent,
    RouterModule
  ]
})
export class RegisterPage {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  async register(form: any) {
    try {
      await this.uData.register(form);
      this.globals.navigate('/login', false)
    } catch (error: any) {
      this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
