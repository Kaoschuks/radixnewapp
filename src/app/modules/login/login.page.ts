import { Component, inject } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { GlobalsServices, authModel } from 'src/app/core';
import { OnboardingModalComponent } from '../modals';
import { RouterModule } from '@angular/router';
import { UserService } from '../providers/users/user.service';

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
export class LoginPage {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  async login(form: authModel) {
    try {
      this.globals.loading.show('verifying credentials')
      await this.uData.login(form);
      await this.uData.get_user_profile()
      this.globals.navigate('/', false)
    } catch (error: any) {
      this.globals.loading.hide()
      this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
