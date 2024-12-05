import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  constructor() { }

  async chnagepassword(form: any) {
    try {
      form['PIN'] = this.globals.config.pin
      this.globals.loading.show('recovering credentials')
      await this.uData.changePassword(form)
      this.globals.toastAlert("Your account password has been changed successfully")
      this.globals.loading.hide()
    } catch (error: any) {
      this.globals.loading.hide()
      this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
