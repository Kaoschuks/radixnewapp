import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
export class CalculatorFormComponent implements OnChanges {

  @Output() onSubmit = new EventEmitter();
  @Input() data: any;
  calculatorForm: FormGroup = new FormGroup({
    RSABal: new FormControl({
      value: '',
      disabled: false
    }, Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
    CurAge: new FormControl({
      value: '',
      disabled: false
    }, Validators.compose([
      Validators.required, Validators.minLength(1),
    ])),
    RetAge: new FormControl({
      value: '',
      disabled: false
    }, Validators.compose([
      Validators.required, Validators.minLength(1),
    ])),
    RSACon: new FormControl({
      value: '',
      disabled: false
    }, Validators.compose([
      Validators.required, Validators.minLength(3),
    ])),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if(this.data) {
      this.calculatorForm.patchValue({
        RSABal: this.data.RSABal,
        RetAge: this.data.retirementage,
        CurAge: this.data.currentage,
        RSACon: this.data.totalcon,
      })
      this.onSubmit.emit({
        ...this.calculatorForm.value,
        Gender: this.data.Gender
      })
    }
  }

  validation_messages = {
    RSABal: [
      { type: "required", message: "Balance is required." },
      {
        type: "minlength",
        message: "Balance must be at least 3 characters long."
      },
    ],
  };

  inputOnChange() {
    if(this.calculatorForm.valid) {
      this.onSubmit.emit({
        ...this.calculatorForm.value,
        Gender: this.data.Gender
      })
    }
  }

}
