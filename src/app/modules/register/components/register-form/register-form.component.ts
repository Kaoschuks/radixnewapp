import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  @Output() onsubmit = new EventEmitter();
  
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    pensiontype: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    phonenumber: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+$')])),
    middlename: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+$')])),
    surname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+$')]))
  }); 
  validation_messages = {
    email: [
      { type: "required", message: "Email is required." },
      {
        type: "minlength",
        message: "Email must be at least 5 characters long."
      }
    ],
    firstname: [
      { type: "required", message: "Firstname is required." },
      { type: "minlength", ssage: "Firstname must be at least 1 characters long." }
    ],
    surname: [
      { type: "required", message: "Surname is required." },
      { type: "minlength", message: "Surname must be at least 1 characters long."}
    ],
    middlename: [
      { type: "required", message: "Middlename is required." },
      { type: "minlength", message: "Middlename must be at least 1 characters long."}
    ],
    phonenumber: [
      { type: "required", message: "Phone Number is required." },
      { type: "minlength", message: "Phone Number must be at least 1 characters long."}
    ]
  };
}
