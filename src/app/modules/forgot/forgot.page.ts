import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar } from '@ionic/angular/standalone';
import { ForgotpasswordFormComponent } from './components/forgotpassword-form/forgotpassword-form.component';
import { ForgotService } from './services/forgot.service';

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
export class ForgotPage extends ForgotService {
}
