import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'forgotpassword-form',
  templateUrl: './forgotpassword-form.component.html',
  styleUrls: ['./forgotpassword-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem, IonInput, IonLabel, IonButton, FormsModule, ReactiveFormsModule, IonRow, IonCol,
    RouterModule, NgIf, NgFor
  ]
})
export class ForgotpasswordFormComponent {
  @Output() onsubmit = new EventEmitter();

  forgetForm: FormGroup = new FormGroup({
    pin: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(11),
      Validators.pattern('^[a-zA-Z0-9_.+-]+$')
    ]))
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
    ]
  };
}
