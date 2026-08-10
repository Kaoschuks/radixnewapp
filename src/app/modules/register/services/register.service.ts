import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService, RequestService, registerModel } from 'src/app/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);
  private api: RequestService = inject(RequestService);

  async verifyNin(nin: string): Promise<any> {
    return await this.api.postWithHeaders(
      environment.ninKycUrl,
      { nin },
      { 'x-cardinalstone-secret': environment.ninKycSecret },
      true
    );
  }

  async register(form: any) {
    try {
      this.globals.loading.show('Creating your PPP account');

      const payload: registerModel = {
        nin: form.nin,
        userType: form.userType,
        rsaPin: form.rsaPin,
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
        pfaCode: form.pfaCode,
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
          consentForm: String(!!form.consentForm),
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

  async registerRSA(form: any) {
    try {
      this.globals.loading.show('Creating your RSA account');

      const payload: any = {
        firstName: form.firstName,
        lastName: form.lastName,
        middleName: form.middleName || undefined,
        dateOfBirth: form.dateOfBirth,
        phoneNumber: form.phoneNumber,
      };

      await this.uData.registerRSA(payload);
      this.globals.loading.hide();
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
