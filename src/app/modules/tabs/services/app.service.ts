import { Injectable, inject } from '@angular/core';
import { GlobalsServices, AccountsService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);
  

  canOnboard: boolean = false;


  onModalClosed(event: any) {
    switch (event) {
      case 'logout':
        this.globals.loggedOut();
        break;
    
      default:
        break;
    }
  }
}
