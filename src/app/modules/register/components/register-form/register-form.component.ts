import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonInput, IonLabel, IonButton, IonTextarea } from '@ionic/angular/standalone';
import { PhonenumberInputComponent } from 'src/app/shared/components';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonItem, IonInput, IonLabel, IonTextarea, IonButton, FormsModule, PhonenumberInputComponent,
    ReactiveFormsModule
  ]
})
export class RegisterFormComponent {

}
