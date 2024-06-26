import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  globals: GlobalsServices = inject(GlobalsServices);
  userService: UserService = inject(UserService);

  disabled: boolean = false
  formdata: any;
  result: any = {
    compoundInterest: 0,
    monthlyDrawDownAmount: 0,
    lipsumAmount: 0
  }


  async calculatedPension() {
    try {
      console.log(this.globals.config)  /// global app data
      console.log(this.userService.user) // looged in user information
      console.log(this.formdata)   ///// formdata use for calculation

      const compoundInterest: any = this.compoundInterestCalculation();
      const monthlyDrawDownAmount: any = this.monthlyDrawDownAmountCalculation();
      const lipsumAmount: any = this.lipsumAmountCalculation();


      this.result = {
        compoundInterest: compoundInterest,
        monthlyDrawDownAmount: monthlyDrawDownAmount,
        lipsumAmount: lipsumAmount,
      }

    } catch (error: any) {
      await this.globals.toastAlert(error, {
        duration: 3000
      });
    }
  }



  private compoundInterestCalculation() {
    return 0
  }

  private lipsumAmountCalculation() {
    return 0
  }

  private monthlyDrawDownAmountCalculation() {
    return 0
  }
}
