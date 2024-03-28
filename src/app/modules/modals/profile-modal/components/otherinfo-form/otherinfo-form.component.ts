import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonTextarea, IonLabel, IonInput, IonText, IonList, IonListHeader, IonButton, IonRow, IonCol, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'otherinfo-form',
  templateUrl: './otherinfo-form.component.html',
  styleUrls: ['./otherinfo-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonTextarea, IonLabel, IonInput, IonText, IonList, IonListHeader, IonButton, IonRow, IonCol, IonSelect, IonSelectOption,
    FormsModule, ReactiveFormsModule
  ]
})
export class OtherinfoFormComponent implements OnChanges {

  @Input() isDisabled!: boolean
  @Input() user: any
  @Output() onSubmit = new EventEmitter();

  otherinfoForm: any

  ngOnChanges(changes: SimpleChanges): void {
    this.otherinfoForm = new FormGroup({
      NIN: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
      NOK_LGA: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_MOBILE_PHONE: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_NAME: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_OTHERNAME: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_RELATIONSHIP: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_STATE: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_SURNAME: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4)]),
      NOK_GENDER: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(3)]),
      NOK_ADDRESS: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(3)]),
      NOK_CORRADDRESS1: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(3)]),
    });
    if(this.user) this.otherinfoForm.patchValue(this.user)
  }

  inputOnChange() {
    if(this.otherinfoForm.valid) this.onSubmit.emit(this.otherinfoForm.value)
  }


}
