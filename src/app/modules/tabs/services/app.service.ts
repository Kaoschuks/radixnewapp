import { Injectable, inject } from '@angular/core';
import { GlobalsServices, AccountsService, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  globals: GlobalsServices = inject(GlobalsServices);
  _accountservice: AccountsService = inject(AccountsService);
  userService: UserService = inject(UserService);
  

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
