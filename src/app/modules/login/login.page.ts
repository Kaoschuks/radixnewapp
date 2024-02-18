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

  login(form: authModel) {
    console.log(form)
    // this.uData.login(form).then(async (res: any) => {
    //   await this.uData.get_user_profile()
    //   this.globals.navigate('/app/overview', false)
    // }).catch((ex: any) => {
    //   this.globals.notifyAlert("Error", ex)
    // })
  }
}
