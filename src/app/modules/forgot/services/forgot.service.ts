import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  constructor() { }

  async forgot(form: any) {
    try {
      this.globals.loading.show('recovering credentials')
      await this.uData.forgot(form)
      this.globals.notifyAlert("Recover Account", "Your account password reset information has been sent to your email")
      this.globals.navigate('/login', false)
    } catch (error: any) {
      this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
