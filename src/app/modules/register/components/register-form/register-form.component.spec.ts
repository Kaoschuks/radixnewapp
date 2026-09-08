import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RequestService } from 'src/app/core';
import { RegisterService } from '../../services/register.service';
import { RegisterFormComponent } from './register-form.component';

describe('Registration Subscribe step', () => {
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

  it('requires a payslip before continuing with BVN', async () => {
    component.registerForm.patchValue({ identityType: 'bvn', bvn: '12345678901' });
    await component.nextStep();
    expect(component.currentStep).toBe(1);
    component.registerForm.patchValue({ payslip: 'data:application/pdf;base64,cGF5' });
    await component.nextStep();
    expect(component.currentStep).toBe(2);
    expect(component.registerForm.get('bvn')?.value).toBe('12345678901');
    expect(component.canProceed).toBeFalse();
    expect(verifyNin).not.toHaveBeenCalled();
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
});
