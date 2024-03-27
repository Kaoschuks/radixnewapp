import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonText, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonTextarea, IonLabel, IonInput, IonText, IonList, IonListHeader, IonButton,
    FormsModule, ReactiveFormsModule
  ]
})
export class EmployeeFormComponent implements OnChanges {

  employeeForm: FormGroup = new FormGroup({
    EMPLOYER_NAME: new FormControl({ value: '', disabled: true }, [Validators.required]),
    DATE_EMPLOYED: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+.(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]),
    EMPLOYER_RCNO: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
    EMPLOYER_ADDRESS: new FormControl({ value: '', disabled: true }, [Validators.required]),
    EMPLOYER_PHONE: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("([0-9])*")]),
  });

  @Input() user: any


  ngOnChanges(changes: SimpleChanges): void {
    this.employeeForm.patchValue(this.user)
  }

}
