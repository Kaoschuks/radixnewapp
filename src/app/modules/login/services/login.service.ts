import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService, authModel } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);


  async login(form: authModel) {
    try {
      this.globals.loading.show('verifying credentials')
      await this.uData.login(form);
      await this.uData.get_user_profile()
      this.globals.navigate('/', false)
    } catch (error: any) {
      this.globals.loading.hide()
      this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
