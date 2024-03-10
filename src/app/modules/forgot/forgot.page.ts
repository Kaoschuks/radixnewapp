import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { ForgotpasswordFormComponent } from './components/forgotpassword-form/forgotpassword-form.component';
import { GlobalsServices } from 'src/app/core';
import { UserService } from '../providers/users/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonListHeader, IonItem, IonLabel, IonFooter, ForgotpasswordFormComponent,
    RouterModule
  ]
})
export class ForgotPage {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  forgot(form: any) {
    try {
      const resp = this.uData.forgot(form)
      this.globals.notifyAlert("Recover Account", "Your account password reset information has been sent to your email")
      this.globals.navigate('/login', false)
    } catch (error: any) {
      this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
