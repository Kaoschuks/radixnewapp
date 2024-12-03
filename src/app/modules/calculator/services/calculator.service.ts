import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';
import { AccountsService } from '../../../shared/services/accounts/accounts.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  globals: GlobalsServices = inject(GlobalsServices);
  userService: UserService = inject(UserService);
  accountService: AccountsService = inject(AccountsService)

  loader: any = new BehaviorSubject(false);
  disabled: boolean = false
  formdata: any;
  result: any = {
    reclump: 0,
    maxmonthly: 0
  }

  protected async getPensionInfo() {
    try {
      this.globals.loading.show('generating pension info...');
      const resp: any = await this.accountService.get_pension_calculator_information(this.globals.config.pin)
      this.globals.loading.hide();
      return resp;
    } catch (error: any) {
      this.globals.loading.hide();
      await this.globals.toastAlert(error, {
        duration: 3000
      });
    }
  }

  protected async calculatedPension() {
    try {
      this.loader.next(true)
      this.result = await this.accountService.pension_calculator(this.formdata)
      this.loader.next(false)
    } catch (error: any) {
      this.loader.next(false)
      await this.globals.toastAlert(error, {
        duration: 3000
      });
    }
  }
}
