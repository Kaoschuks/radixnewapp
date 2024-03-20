import { Injectable, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class MicropensionService {
  globals: GlobalsServices = inject(GlobalsServices);

  paymentInit() {
      // this._globals.spinner.show();
      console.log('Payment initialized');
  }

  paymentCancel() {
      console.log('Payment closed');
      // this._globals.spinner.hide();
  }

  paymentDone($event: any) {
    // this._globals.spinner.hide();
    console.log($event)
  }
}
