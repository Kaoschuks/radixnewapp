import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonRow, IonCol, IonButton,
    NgFor, NgIf,
    FormsModule, ReactiveFormsModule,
    CurrencyPipe
  ]
})
export class CalculatorFormComponent  implements OnInit {

  @Output() onsubmit = new EventEmitter();
  calculatorForm: FormGroup = new FormGroup({
    investmentAmount: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
    investmentPeriod: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
    investmentRate: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
    annualContribution: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
  });

  validation_messages = {
    investmentAmount: [
      { type: "required", message: "Investment Amount is required." },
      {
        type: "minlength",
        message: "Investment Amount must be at least 3 characters long."
      },
    ],
  };

  ngOnInit() {}

}
