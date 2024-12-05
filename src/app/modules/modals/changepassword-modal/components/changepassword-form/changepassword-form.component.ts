import { NgIf, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonItem, IonInput, IonLabel, IonButton, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'changepassword-form',
  templateUrl: './changepassword-form.component.html',
  styleUrls: ['./changepassword-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonItem, IonInput, IonLabel, IonButton, FormsModule, ReactiveFormsModule, IonRow, IonCol,
    RouterModule, NgIf, NgFor
  ]
})
export class ChangepasswordFormComponent  {
  @Output() onsubmit = new EventEmitter();
  hide = true;

  changepasswordForm: FormGroup = new FormGroup({
    // PIN: new FormControl('', Validators.compose([
    //   Validators.required, Validators.minLength(11),
    //   Validators.pattern('^[a-zA-Z0-9_.+-]+$')
    // ])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    rpassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  });
  validation_messages = {
    PIN: [
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
