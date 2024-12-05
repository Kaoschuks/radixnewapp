import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    NgFor, NgIf,
    IonItem, IonInput, IonLabel, IonButton, IonRow, IonCol, IonTextarea
  ]
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup = new FormGroup({
    fullname: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(5),
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(2)
    ])),
    phonenumber: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(2)
    ])),
    msg: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(2),
      Validators.pattern('^[a-zA-Z0-9_.+-]+$')
    ])),
  });

  validation_messages = {
    fullname: [
      { type: "required", message: "Fullname is required." },
      {
        type: "minlength",
        message: "Fullname must be at least 5 characters long."
      },
      { type: "text", message: "Fullname must be valid" }
    ], 
    email: [
      {
        type: "minlength",
        message: "Email must be at least 2 characters long."
      },
      { type: "pattern", message: "Email must be valid." },
      { type: "email", message: "Email must be valid" }
    ], 
    phonenumber: [
      { type: "required", message: "Phone Number is required." },
      {
        type: "minlength",
        message: "Phone Number must be at least 5 characters long."
      }
    ], 
    msg: [
      { type: "required", message: "Message is required." },
      {
        type: "minlength",
        message: "Message must be at least 5 characters long."
      },
      { type: "pattern", message: "Message must be valid." },
      { type: "text", message: "Message must be valid" }
    ]
  };

  @Output() onSubmit: any = new EventEmitter();

  ngOnInit() {}

  // async saveFeedback(form: any) {
  //   const res: any = await this._uServices.send_feedback(form)
  // }
}
