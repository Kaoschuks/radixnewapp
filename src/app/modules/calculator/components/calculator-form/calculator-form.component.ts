import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonicModule,
    NgFor, NgIf,
    FormsModule, ReactiveFormsModule,
    CurrencyPipe
  ]
})
export class CalculatorFormComponent {

  @Output() onSubmit = new EventEmitter();
  calculatorForm: FormGroup = new FormGroup({
    balance: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
    currentage: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(1),
    ])),
    retireage: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(1),
    ])),
    contribution: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
  });

  validation_messages = {
    balance: [
      { type: "required", message: "Balance is required." },
      {
        type: "minlength",
        message: "Balance must be at least 3 characters long."
      },
    ],
  };

  inputOnChange() {
    if(this.calculatorForm.valid) this.onSubmit.emit(this.calculatorForm.value)
  }

}
