import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonText, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonTextarea, IonLabel, IonInput, IonText, IonList, IonListHeader, IonButton, IonRow, IonCol,
    FormsModule, ReactiveFormsModule
  ]
})
export class EmployeeFormComponent implements OnChanges {

  @Input() isDisabled!: boolean
  @Input() user: any
  @Output() onSubmit = new EventEmitter();

  employeeForm: any


  ngOnChanges(changes: SimpleChanges): void {
    this.employeeForm = new FormGroup({
      EMPLOYER_NAME: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
      DATE_EMPLOYED: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+.(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]),
      EMPLOYER_RCNO: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(3)]),
      EMPLOYER_ADDRESS: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
      EMPLOYER_PHONE: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("([0-9])*")]),
    });
    if(this.user) this.employeeForm.patchValue(this.user)
  }

  inputOnChange() {
    if(this.employeeForm.valid) this.onSubmit.emit(this.employeeForm.value)
  }

}
