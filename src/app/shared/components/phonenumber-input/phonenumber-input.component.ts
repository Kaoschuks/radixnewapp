import { NgIf, TitleCasePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'phonenumber-input',
  templateUrl: './phonenumber-input.component.html',
  styleUrls: ['./phonenumber-input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe, NgIf]
})

export class PhonenumberInputComponent implements  AfterViewInit, OnDestroy {
	@Input() phone: string = '';
	@Input() id: string = '';
	@Output() oninput = new EventEmitter();
	public iti: any;
	private input: any;

  constructor() {}

	ngAfterViewInit() {
		this.input = document.querySelector("#"+this.id+"phone");
		if(this.input) {
			this.iti = intlTelInput(this.input, {
				separateDialCode: true,
			});
			if(this.phone != '' && this.phone != null) this.iti.setNumber(this.phone)
		}
	}

	ngOnDestroy() {
		this.iti.destroy();
	}

  getError(errorNumber: number): string {
    if (errorNumber == 1) return 'invalid country code';
    if (errorNumber == 2) return 'phone number is too short';
    if (errorNumber == 3) return 'phone number is too long';
    if (errorNumber == 5) return 'phone number lenght is invalid';
    return 'Phone number is invalid';
  }

  onInputChange() {
    if (this.iti.isValidNumber() == true)
      this.oninput.emit({
        dialCode: this.iti.getSelectedCountryData().dialCode,
        phoneNumber: this.iti.getNumber(),
      });
  }
}
