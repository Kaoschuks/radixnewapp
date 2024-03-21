import { Injectable, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  globals: GlobalsServices = inject(GlobalsServices);

  async showAlert(msg: string) {
    await this.globals.toastAlert(msg, {
      duration: 3000
    });
  }
}
