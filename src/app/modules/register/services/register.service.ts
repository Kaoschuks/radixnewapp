import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  globals: GlobalsServices = inject(GlobalsServices);
  uData: UserService = inject(UserService);

  async register(form: any) {
    try {
      this.globals.loading.show('Creating your account')
      await this.uData.register(form);
      this.globals.navigate('/login', false)
    } catch (error: any) {
      this.globals.loading.hide()
     await  this.globals.toastAlert(error.message || error.error || error, {
        cssClass: 'toast-danger'
      })
    }
  }
}
