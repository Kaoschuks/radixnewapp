import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService, registerModel } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  async register(form: any) {
    try {
      this.globals.loading.show('Creating your account');

      const payload: registerModel = {
        nin: form.nin,
        userType: form.userType,
        bvn: form.bvn,
        gender: form.gender,
        title: form.title,
        firstName: form.firstName,
        lastName: form.lastName,
        middleName: form.middleName || undefined,
        dateOfBirth: form.dateOfBirth,
        phoneNumber: form.phoneNumber,
        guardianPin: form.guardianPin || undefined,
        emailAddress: form.emailAddress,
        nationality: form.nationality,
        stateOfOriginCode: form.stateOfOriginCode,
        lgaOriginCode: form.lgaOriginCode,
        maritalStatus: form.maritalStatus,
        residentialAddress: form.residentialAddress,
        residentialStateCode: form.residentialStateCode,
        residentialLgaCode: form.residentialLgaCode,
        apaCode: form.apaCode || undefined,
        employmentDetails: {
          employerCode: form.employerCode,
        },
        nextOfKinDetails: {
          nextOfKinTitle: form.nextOfKinTitle || undefined,
          nextOfKinGender: form.nextOfKinGender || undefined,
          nextOfKinFirstname: form.nextOfKinFirstname,
          nextOfKinSurname: form.nextOfKinSurname,
          nextOfKinAddress: form.nextOfKinAddress || undefined,
          nextOfRelationship: form.nextOfRelationship,
          nextOfKinPhoneNumber: form.nextOfKinPhoneNumber || undefined,
          nextOfKinEmail: form.nextOfKinEmail || undefined,
        },
        parentDetails: form.guardianPin ? { rsaPin: form.guardianPin } : undefined,
        biometricsDetails: {
          photo: this.stripBase64Prefix(form.photo),
          signature: this.stripBase64Prefix(form.signature),
          consentForm: this.stripBase64Prefix(form.consentForm),
        },
      };

      await this.uData.register(payload);
      this.globals.navigate('/login', false);
    } catch (error: any) {
      this.globals.loading.hide();
      await this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      });
    }
  }

  // The API expects raw base64 without the data URI prefix (data:image/...;base64,)
  private stripBase64Prefix(dataUrl: string): string {
    if (!dataUrl) return dataUrl;
    const idx = dataUrl.indexOf(',');
    return idx >= 0 ? dataUrl.substring(idx + 1) : dataUrl;
  }
}
