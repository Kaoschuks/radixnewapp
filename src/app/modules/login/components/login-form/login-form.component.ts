import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem, IonInput, IonLabel, IonButton, FormsModule, ReactiveFormsModule,
    RouterModule]
})
export class LoginFormComponent {
  @Output() onsubmit = new EventEmitter();
  
  hide = true;
  loginForm: FormGroup = new FormGroup({
    pin: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(11),
      Validators.pattern('^[a-zA-Z0-9_.+-]+$')
    ])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  });
  validation_messages = {
    pin: [
      { type: "required", message: "Pin is required." },
      {
        type: "minlength",
        message: "Pin must be at least 11 characters long."
      },
      { type: "pattern", message: "Pin must be valid." },
      { type: "text", message: "Pin must be valid" }
    ],
    password: [
      { type: "required", message: "Password is required." },
      {
        type: "minlength",
        message: "Password must be at least 6 characters long."
      }
    ]
  };

  togglePasswordFieldType(){
    this.hide = !this.hide;
  }

}
