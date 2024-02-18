import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonHeader, IonItem, IonLabel, IonListHeader, IonToolbar, IonContent, IonFooter } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { registerModel } from 'src/app/core';

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

  register(form: registerModel) {

    // this.uData.register(form).then((res: any) => {
    //   this.globals.navigate('/login', false)
    // }).catch((ex: any) => {
    //   this.globals.notifyAlert("Error", ex)
    // })
  }
}
