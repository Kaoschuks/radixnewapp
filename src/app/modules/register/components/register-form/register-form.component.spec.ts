import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RequestService } from 'src/app/core';
import { RegisterService } from '../../services/register.service';
import { RegisterFormComponent } from './register-form.component';

describe('Registration KYC step', () => {
  let component: RegisterFormComponent;
  let verifyNin: jasmine.Spy;

  beforeEach(() => {
    verifyNin = jasmine.createSpy().and.resolveTo({
      statusCode: 200,
      data: { first_name: 'JOHN', last_name: 'DOE', date_of_birth: '1990-05-15', phone_number: '08023070922' }
    });
    TestBed.configureTestingModule({ providers: [
      { provide: ChangeDetectorRef, useValue: { markForCheck() {} } },
      { provide: RequestService, useValue: { get: async () => [] } },
      { provide: RegisterService, useValue: { verifyNin } }
    ] });
    component = TestBed.runInInjectionContext(() => new RegisterFormComponent());
    void component.ngOnInit();
  });

  it('requires evidence of payment before continuing with verified NIN', async () => {
    component.registerForm.patchValue({ nin: '12345678901' });
    await component.nextStep();
    expect(component.currentStep).toBe(1);
    component.registerForm.patchValue({ payslip: 'data:application/pdf;base64,cGF5' });
    await component.nextStep();
    expect(component.currentStep).toBe(2);
    expect(component.registerForm.get('nin')?.value).toBe('12345678901');
    expect(component.canProceed).toBeFalse();
    expect(verifyNin).toHaveBeenCalledTimes(1);
  });

  it('verifies NIN and preloads personal details', async () => {
    component.registerForm.patchValue({ nin: '32345678214', payslip: 'data:image/png;base64,cGF5' });
    await component.nextStep();
    expect(component.currentStep).toBe(2);
    expect(component.ninVerified).toBeTrue();
    expect(component.registerForm.get('firstName')?.value).toBe('John');
    expect(component.registerForm.get('bvn')?.invalid).toBeTrue();
    component.prevStep();
    expect(component.registerForm.get('payslip')?.value).toBe('data:image/png;base64,cGF5');
    await component.nextStep();
    expect(verifyNin).toHaveBeenCalledTimes(1);
  });

  it('blocks failed verification and invalidates changed NIN', async () => {
    component.registerForm.patchValue({ nin: '32345678214', payslip: 'cGF5' });
    verifyNin.and.rejectWith(new Error('Verification failed'));
    await component.nextStep();
    expect(component.currentStep).toBe(1);
    expect(component.ninVerifyError).toBe('Verification failed');
    component.ninVerified = true;
    component.registerForm.patchValue({ nin: '32345678215' });
    expect(component.ninVerified).toBeFalse();
  });

  it('does not submit an incomplete registration from the final step', () => {
    component.currentStep = 5;
    const submit = spyOn(component.onsubmit, 'emit');
    component.onSubmit();
    expect(submit).not.toHaveBeenCalled();
  });
  it('requires exactly eleven digits for both phone numbers', () => {
    for (const field of ['phoneNumber', 'nextOfKinPhoneNumber']) {
      const control = component.registerForm.get(field)!;
      for (const invalid of ['', '0801234567', '080123456789', '0801234567a']) {
        control.setValue(invalid);
        expect(control.invalid).withContext(invalid).toBeTrue();
      }
      control.setValue('08012345678');
      expect(control.valid).toBeTrue();
    }
    const input = { value: '08012abc3456789' };
    component.onPhoneInput('phoneNumber', { target: input } as unknown as Event);
    expect(input.value).toBe('08012345678');
    expect(component.registerForm.get('phoneNumber')?.value).toBe('08012345678');
  });

  it('normalizes NIN phone numbers and allows missing numbers to be entered', async () => {
    component.registerForm.patchValue({ nin: '12345678901' });
    verifyNin.and.resolveTo({ statusCode: 200, data: { phone_number: '+234 801 234 5678' } });
    await component.verifyNin();
    expect(component.registerForm.get('phoneNumber')?.value).toBe('08012345678');
    expect(component.ninPhoneLocked).toBeTrue();
    component.registerForm.patchValue({ nin: '12345678902' });
    verifyNin.and.resolveTo({ statusCode: 200, data: { phone_number: '' } });
    await component.verifyNin();
    expect(component.ninPhoneLocked).toBeFalse();
    expect(component.registerForm.get('phoneNumber')?.invalid).toBeTrue();
  });

  it('clears an old LGA and keeps late responses scoped to their state', async () => {
    const api = TestBed.inject(RequestService);
    let finishLagos!: (value: any) => void;
    spyOn(api, 'get').and.callFake(async (url: string) => {
      if (url.endsWith('/LA')) return await new Promise(resolve => finishLagos = resolve);
      return [{ CODE: 'NEW', DESCRIPTION: 'New LGA' }];
    });
    component.registerForm.patchValue({ stateOfOriginCode: 'LA', lgaOriginCode: 'OLD' });
    const pending = component.loadLgas('LA');
    component.registerForm.patchValue({ stateOfOriginCode: 'AB' });
    await component.loadLgas('AB');
    expect(component.registerForm.get('lgaOriginCode')?.value).toBe('');
    finishLagos([{ CODE: 'GGE', DESCRIPTION: 'AGEGE' }]);
    await pending;
    expect(component.filteredOriginLgas).toEqual([{ value: 'NEW', label: 'New LGA' }]);
  });

});
