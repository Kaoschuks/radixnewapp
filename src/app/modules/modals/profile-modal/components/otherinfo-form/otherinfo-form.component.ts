import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalsProvider } from 'src/app/providers/core/globals';

@Component({
  selector: 'otherinfo-form',
  templateUrl: './otherinfo-form.component.html',
  styleUrls: ['./otherinfo-form.component.scss'],
})
export class OtherinfoFormComponent implements OnInit {

  otherinfoForm: FormGroup = new FormGroup({
    NIN: new FormControl({ value: '', disabled: true }, [Validators.required]),
    NOK_LGA: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_MOBILE_PHONE: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_NAME: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_OTHERNAME: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_RELATIONSHIP: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_STATE: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_SURNAME: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(4)]),
    NOK_GENDER: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
    NOK_ADDRESS: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
    NOK_CORRADDRESS1: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]),
  });
  constructor(
    public globals: GlobalsProvider
  ) { }

  ngOnInit() {
    this.otherinfoForm.patchValue(this.globals.userdata)
  }


}
