import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonItem, IonTextarea, IonLabel, IonInput, IonText, IonList, IonListHeader, IonButton, IonSelect, IonSelectOption, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonTextarea, IonLabel, IonInput, IonText, IonList, IonListHeader, IonButton, IonSelect, IonSelectOption,
    IonRow, IonCol,
    FormsModule, ReactiveFormsModule
  ]
})
export class ProfileFormComponent implements OnChanges {
  ext: string = "+234"
  options = {
    maximumImagesCount: 5,
    quality: 100,
    outputType: 1
  }
  @Input() isDisabled: boolean = false

  profileForm: FormGroup= new FormGroup({
    TITLE: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    DATE_OF_BIRTH: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    OTHERNAMES: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    PERMANENT_ADDRESS: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    MARITAL_STATUS_CODE: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    SURNAME: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    EMAIL: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+.(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]),
    FIRSTNAME: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(3)]),
    GENDER: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required]),
    MOBILE_PHONE: new FormControl({ value: '', disabled: this.isDisabled }, [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("([0-9])*")]),
  });

  @Output() onSubmit = new EventEmitter();
  @Input() user: any

  ngOnChanges() {
    this.profileForm.patchValue(this.user);
  }

  inputOnChange() {
    if(this.profileForm.valid) this.onSubmit.emit(this.profileForm.value)
  }
}
