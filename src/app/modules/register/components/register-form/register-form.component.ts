import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, HostListener, inject, OnInit, Output
} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonItem, IonInput, IonLabel, IonButton, IonSelect, IonSelectOption,
  IonRow, IonCol, IonIcon, IonProgressBar, IonCheckbox
} from '@ionic/angular/standalone';
import { RequestService } from 'src/app/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonItem, IonInput, IonLabel, IonButton, FormsModule, IonSelect, IonSelectOption,
    IonRow, IonCol, ReactiveFormsModule, NgIf, NgFor, IonIcon, IonProgressBar, IonCheckbox
  ]
})
export class RegisterFormComponent implements OnInit {
  @Output() onsubmit = new EventEmitter();

  private cdr = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  private sanitizer = inject(DomSanitizer);
  private api = inject(RequestService);
  private registerService = inject(RegisterService);

  employers: { value: string; label: string }[] = [];
  employersLoading = false;

  ninVerified = false;
  ninVerifying = false;
  ninVerifyError = '';
  ninData: any = null;

  currentStep = 1;
  totalSteps = 5;
  payslipPdfPreview: SafeResourceUrl | null = null;
  payslipName = '';
  payslipError = '';
  payslipLoading = false;

  registerForm: FormGroup = new FormGroup({
    payslip: new FormControl('', Validators.required),

    // Personal Details
    nin: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d+$/)]),
    userType: new FormControl('', Validators.required),
    guardianPin: new FormControl(''),
    bvn: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d+$/)]),
    gender: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    firstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-']+$/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-']+$/)]),
    middleName: new FormControl('', Validators.pattern(/^[a-zA-Z\s\-']*$/)),
    dateOfBirth: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d+$/)]),
    emailAddress: new FormControl('', [Validators.required, Validators.email]),
    stateOfOriginCode: new FormControl('', Validators.required),
    lgaOriginCode: new FormControl('', Validators.required),
    maritalStatus: new FormControl('', Validators.required),
    residentialAddress: new FormControl('', [Validators.required, Validators.minLength(5)]),
    residentialStateCode: new FormControl('', Validators.required),
    residentialLgaCode: new FormControl('', Validators.required),
    apaCode: new FormControl('001'),

    // Step 3: Employment Details
    employerCode: new FormControl('', Validators.required),

    // Step 4: Next of Kin
    nextOfKinTitle: new FormControl('', Validators.required),
    nextOfKinGender: new FormControl('', Validators.required),
    nextOfKinFirstname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-']+$/)]),
    nextOfKinSurname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s\-']+$/)]),
    nextOfKinAddress: new FormControl('', [Validators.required, Validators.minLength(5)]),
    nextOfRelationship: new FormControl('', Validators.required),
    nextOfKinPhoneNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d+$/)]),
    nextOfKinEmail: new FormControl('', [Validators.required, Validators.email]),

    // Step 5: Images (all required)
    signature: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    consentForm: new FormControl(false, Validators.requiredTrue),
  });

  validation_messages: { [key: string]: { type: string; message: string }[] } = {
    nin: [
      { type: 'required', message: 'NIN is required.' },
      { type: 'minlength', message: 'NIN must be 11 digits.' },
      { type: 'maxlength', message: 'NIN must not exceed 11 digits.' },
      { type: 'pattern', message: 'NIN must contain digits only.' },
    ],
    bvn: [
      { type: 'required', message: 'BVN is required.' },
      { type: 'minlength', message: 'BVN must be 11 digits.' },
      { type: 'maxlength', message: 'BVN must not exceed 11 digits.' },
      { type: 'pattern', message: 'BVN must contain digits only.' },
    ],
    userType: [{ type: 'required', message: 'User type is required.' }],
    guardianPin: [{ type: 'required', message: 'Guardian PIN is required for a minor.' }],
    gender: [{ type: 'required', message: 'Gender is required.' }],
    title: [{ type: 'required', message: 'Title is required.' }],
    firstName: [
      { type: 'required', message: 'First name is required.' },
      { type: 'pattern', message: 'First name must contain letters only.' },
    ],
    lastName: [
      { type: 'required', message: 'Last name is required.' },
      { type: 'pattern', message: 'Last name must contain letters only.' },
    ],
    middleName: [
      { type: 'pattern', message: 'Middle name must contain letters only.' },
    ],
    dateOfBirth: [{ type: 'required', message: 'Date of birth is required.' }],
    phoneNumber: [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'minlength', message: 'Phone number must be exactly 11 digits.' },
      { type: 'maxlength', message: 'Phone number must be exactly 11 digits.' },
      { type: 'pattern', message: 'Phone number must contain digits only.' },
    ],
    emailAddress: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Please enter a valid email.' },
    ],
    stateOfOriginCode: [{ type: 'required', message: 'State of origin is required.' }],
    lgaOriginCode: [{ type: 'required', message: 'LGA of origin is required.' }],
    maritalStatus: [{ type: 'required', message: 'Marital status is required.' }],
    residentialAddress: [
      { type: 'required', message: 'Residential address is required.' },
      { type: 'minlength', message: 'Please enter a full address.' },
    ],
    residentialStateCode: [{ type: 'required', message: 'Residential state is required.' }],
    residentialLgaCode: [{ type: 'required', message: 'Residential LGA is required.' }],
    employerCode: [{ type: 'required', message: 'Employer is required.' }],
    nextOfKinTitle: [{ type: 'required', message: 'Title is required.' }],
    nextOfKinGender: [{ type: 'required', message: 'Gender is required.' }],
    nextOfKinFirstname: [
      { type: 'required', message: 'First name is required.' },
      { type: 'pattern', message: 'First name must contain letters only.' },
    ],
    nextOfKinSurname: [
      { type: 'required', message: 'Surname is required.' },
      { type: 'pattern', message: 'Surname must contain letters only.' },
    ],
    nextOfKinAddress: [
      { type: 'required', message: 'Address is required.' },
      { type: 'minlength', message: 'Please enter a full address.' },
    ],
    nextOfRelationship: [{ type: 'required', message: 'Relationship is required.' }],
    nextOfKinPhoneNumber: [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'minlength', message: 'Phone number must be exactly 11 digits.' },
      { type: 'maxlength', message: 'Phone number must be exactly 11 digits.' },
      { type: 'pattern', message: 'Phone number must contain digits only.' },
    ],
    nextOfKinEmail: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Please enter a valid email.' },
    ],
    signature: [{ type: 'required', message: 'Signature image is required.' }],
    photo: [{ type: 'required', message: 'Passport photo is required.' }],
    consentForm: [{ type: 'required', message: 'You must accept the consent statement to continue.' }],
  };

  // Select options
  genderOptions = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' }
  ];

  titleOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Miss', label: 'Miss' },
    { value: 'Dr', label: 'Dr' },
    { value: 'Prof', label: 'Prof' }
  ];

  maritalStatusOptions = [
    { value: 'SINGLE', label: 'Single' },
    { value: 'MARRIED', label: 'Married' },
    { value: 'DIVORCED', label: 'Divorced' },
    { value: 'WIDOWED', label: 'Widowed' }
  ];


  userTypeOptions = [
    { value: 'RSA', label: 'Adult' },
    { value: 'MINOR', label: 'Minor' }
  ];

  relationshipOptions = [
    { value: 'SPOUSE', label: 'Spouse' },
    { value: 'CHILD', label: 'Child' },
    { value: 'PARENT', label: 'Parent' },
    { value: 'SIBLING', label: 'Sibling' },
    { value: 'OTHER', label: 'Other' }
  ];

  selectInterface: 'action-sheet' | 'popover' = 'action-sheet';
  stateOptions: { value: string; label: string }[] = [];
  lgasByState: Record<string, { value: string; label: string }[]> = {};
  statesLoading = false;
  statesError = '';
  lgaLoading: Record<string, boolean> = {};
  lgaErrors: Record<string, string> = {};
  private lgaRequests = new Map<string, Promise<void>>();
  ninPhoneLocked = false;

  @HostListener('window:resize')
  updateSelectInterface() {
    this.selectInterface = typeof window !== 'undefined' && window.innerWidth >= 768
      ? 'popover' : 'action-sheet';
  }

  async loadStates() {
    this.statesLoading = true;
    this.statesError = '';
    try {
      this.stateOptions = await this.loadLocationOptions('states');
    } catch {
      this.statesError = 'Unable to load states. Please retry.';
    } finally {
      this.statesLoading = false;
      this.cdr.markForCheck();
    }
  }

  loadLgas(state: string): Promise<void> {
    if (!state || this.lgasByState[state]) return Promise.resolve();
    const pending = this.lgaRequests.get(state);
    if (pending) return pending;
    this.lgaLoading[state] = true;
    this.lgaErrors[state] = '';
    const request = (async () => {
      try {
        this.lgasByState[state] = await this.loadLocationOptions(`GetLGA/${encodeURIComponent(state)}`);
      } catch {
        this.lgaErrors[state] = 'Unable to load LGAs. Please retry.';
      } finally {
        this.lgaLoading[state] = false;
        this.lgaRequests.delete(state);
        this.cdr.markForCheck();
      }
    })();
    this.lgaRequests.set(state, request);
    return request;
  }

  private async loadLocationOptions(path: string) {
    const response: any = await this.api.get(
      `https://online.cardinalstonepensions.com/RadixWebAPI/api/${path}`, true);
    const list = Array.isArray(response) ? response : response?.data;
    if (!Array.isArray(list)) throw new Error('Invalid location response');
    return list.map((item: { CODE: string; DESCRIPTION: string }) => ({
      value: item.CODE.trim(), label: item.DESCRIPTION.trim()
    }));
  }

  onPhoneInput(field: 'phoneNumber' | 'nextOfKinPhoneNumber', event: Event) {
    const input = event.target as HTMLInputElement;
    const value = (input.value || '').replace(/\D/g, '').slice(0, 11);
    input.value = value;
    this.registerForm.get(field)?.setValue(value);
  }

  private normalizeNinPhone(value: unknown): string {
    const digits = String(value ?? '').replace(/\D/g, '');
    return /^234\d{10}$/.test(digits) ? `0${digits.slice(3)}` : digits;
  }

  get filteredOriginLgas() {
    return this.lgasByState[this.registerForm.get('stateOfOriginCode')?.value] || [];
  }

  get filteredResidentialLgas() {
    return this.lgasByState[this.registerForm.get('residentialStateCode')?.value] || [];
  }

  get isMinor(): boolean {
    return this.registerForm.get('userType')?.value === 'MINOR';
  }

  get canProceed(): boolean {
    const fieldsValid = this.getStepFields(this.currentStep)
      .every(field => this.registerForm.get(field)?.valid);
    if (this.currentStep === 1) {
      return fieldsValid && !this.payslipLoading &&
        this.ninVerified;
    }
    if (this.currentStep === 2) return fieldsValid && this.ninVerified;
    return fieldsValid;
  }

  async verifyNin() {
    const ninControl = this.registerForm.get('nin');
    if (!ninControl?.valid || this.ninVerifying) return;

    const nin = ninControl.value;
    if (this.ninVerified && nin === this._lastVerifiedNin) return;

    this.ninVerifying = true;
    this.ninVerified = false;
    this.ninVerifyError = '';
    this.cdr.markForCheck();

    try {
      const res: any = await this.registerService.verifyNin(nin);
      if (nin !== ninControl.value) return;

      if (res?.statusCode !== 200) {
        throw new Error(res?.message || 'NIN verification failed. Please try again.');
      }

      this.ninData = res?.data ?? null;
      this._populateFromNin(this.ninData);
      this.ninVerified = true;
      this.ninVerifyError = '';
      this._lastVerifiedNin = nin;
    } catch (err: any) {
      if (nin !== ninControl.value) return;
      this.ninVerified = false;
      this.ninData = null;
      this.ninVerifyError = err?.error?.message || err?.message || 'NIN verification failed. Please try again.';
    } finally {
      this.ninVerifying = false;
      this.cdr.markForCheck();
    }
  }

  retryNinVerification() {
    this.ninVerifyError = '';
    this.ninVerified = false;
    this.ninData = null;
    this._lastVerifiedNin = '';
    this._clearNinPopulatedFields();
    this.cdr.markForCheck();
  }

  private _populateFromNin(data: any) {
    if (!data) return;
    const patch: any = {};
    if (data.first_name)    patch['firstName']   = this._toTitleCase(data.first_name);
    if (data.last_name)     patch['lastName']    = this._toTitleCase(data.last_name);
    if (data.middle_name)   patch['middleName']  = this._toTitleCase(data.middle_name);
    if (data.date_of_birth) patch['dateOfBirth'] = data.date_of_birth; // already YYYY-MM-DD
    const phone = this.normalizeNinPhone(data.phone_number);
    this.ninPhoneLocked = /^\d{11}$/.test(phone);
    patch['phoneNumber'] = this.ninPhoneLocked ? phone : '';
    this.registerForm.patchValue(patch);
  }

  private _clearNinPopulatedFields() {
    this.ninPhoneLocked = false;
    this.registerForm.patchValue({
      firstName: '', lastName: '', middleName: '', dateOfBirth: '', phoneNumber: ''
    });
  }

  private _toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }

  private _lastVerifiedNin = '';

  get isLastStep(): boolean {
    return this.currentStep === this.totalSteps;
  }

  get isFirstStep(): boolean {
    return this.currentStep === 1;
  }

  get progressValue(): number {
    return this.currentStep / this.totalSteps;
  }

  getStepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'KYC';
      case 2: return 'Personal Details';
      case 3: return 'Employment Details';
      case 4: return 'Next of Kin';
      case 5: return 'Upload Images';
      default: return '';
    }
  }

  async nextStep() {
    if (this.currentStep === 1 && !this.ninVerified) {
      await this.verifyNin();
    }
    if (!this.canProceed) {
      this.getStepFields(this.currentStep)
        .forEach(f => this.registerForm.get(f)?.markAsTouched());
      return;
    }
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (!this.isLastStep) {
      void this.nextStep();
      return;
    }
    if (this.registerForm.invalid || !this.ninVerified || this.payslipLoading) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.onsubmit.emit(this.registerForm.value);
  }

  onFileSelected(field: string, event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (field === 'payslip') {
      this.registerForm.get(field)?.setValue('');
      this.payslipPdfPreview = null;
      this.payslipName = '';
      this.payslipError = '';
      if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) {
        this.payslipError = 'Choose a PDF, JPG or PNG as evidence of payment.';
        return;
      }
      this.payslipLoading = true;
    }
    const reader = new FileReader();
    reader.onerror = () => {
      if (field === 'payslip') {
        this.payslipLoading = false;
        this.payslipError = 'Could not read the evidence of payment. Please choose it again.';
        this.cdr.markForCheck();
      }
    };
    reader.onload = () => {
      if (field === 'payslip') {
        // Only trust the data URL generated from the locally selected PDF.
        this.payslipPdfPreview = file.type === 'application/pdf'
          ? this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string)
          : null;
        this.payslipName = file.name;
        this.payslipLoading = false;
      }
      this.registerForm.get(field)?.setValue(reader.result as string);
      this.registerForm.get(field)?.markAsTouched();
      this.cdr.markForCheck();
    };
    reader.readAsDataURL(file);
  }

  clearFile(field: string, inputEl: HTMLInputElement) {
    this.registerForm.get(field)?.setValue('');
    inputEl.value = '';
    if (field === 'payslip') {
      this.payslipPdfPreview = null;
      this.payslipName = '';
      this.payslipError = '';
    }
  }

  async ngOnInit() {
    this.updateSelectInterface();
    void this.loadStates();
    for (const [stateField, lgaField] of [
      ['stateOfOriginCode', 'lgaOriginCode'],
      ['residentialStateCode', 'residentialLgaCode']
    ]) {
      this.registerForm.get(stateField)?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(state => {
        this.registerForm.get(lgaField)?.reset('');
        void this.loadLgas(state);
      });
    }
    void this.loadEmployers();
    this.registerForm.get('nin')?.valueChanges.subscribe(() => {
      if (this.ninVerified || this.ninVerifyError) {
        this.ninVerified = false;
        this.ninData = null;
        this._clearNinPopulatedFields();
        this.ninVerifyError = '';
        this._lastVerifiedNin = '';
        this.cdr.markForCheck();
      }
    });
    this.registerForm.get('userType')?.valueChanges.subscribe(() => this._updateGuardianPinValidators());
    this._updateGuardianPinValidators();
  }

  private _updateGuardianPinValidators() {
    const guardianPin = this.registerForm.get('guardianPin');
    guardianPin?.setValidators(this.isMinor ? [Validators.required] : []);
    guardianPin?.updateValueAndValidity({ emitEvent: false });
  }

  private async loadEmployers() {
    this.employersLoading = true;
    try {
      const res: any = await this.api.get(
        'https://online.cardinalstonepensions.com/RadixWebAPI/api/employers',
        true
      );
      const list: any[] = Array.isArray(res) ? res : (res?.data ?? []);
      this.employers = list.map(e => ({
        value: e.CODE ,
        label: e.EMPNAME,
      }));
    } catch {
      this.employers = [];
    } finally {
      this.employersLoading = false;
      this.cdr.markForCheck();
    }
  }

  private getStepFields(step: number): string[] {
    switch (step) {
      case 1: return ['nin', 'payslip'];
      case 2: return [
        'nin', 'bvn', 'userType', 'gender', 'title',
        'firstName', 'lastName', 'dateOfBirth', 'phoneNumber', 'emailAddress',
        'stateOfOriginCode', 'lgaOriginCode',
        'maritalStatus', 'residentialAddress', 'residentialStateCode',
        'residentialLgaCode',
        ...(this.isMinor ? ['guardianPin'] : [])
      ];
      case 3: return ['employerCode'];
      case 4: return [
        'nextOfKinTitle', 'nextOfKinGender', 'nextOfKinFirstname', 'nextOfKinSurname',
        'nextOfKinAddress', 'nextOfRelationship', 'nextOfKinPhoneNumber', 'nextOfKinEmail'
      ];
      case 5: return ['signature', 'photo', 'consentForm'];
      default: return [];
    }
  }
}
