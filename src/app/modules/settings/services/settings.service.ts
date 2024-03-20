import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  globals: GlobalsServices = inject(GlobalsServices);
  _userservice: UserService = inject(UserService);

  constructor() { }

  openSupportPage(page: string = '') {
    this.globals.modalData.title = page
    this.globals.openModal('supportmodal')
  }

  onDeleteAccount() {
    this.globals.modalData = {
      title: 'Are you sure',
      color: 'danger',
      iconName: 'alert-circle-outline',
      description:
        'Your account will be permanently deleted, do you want to proceed ?',
      buttons: [
        {
          action: 'no',
          text: 'No, Cancel',
        },
        {
          action: 'deleteaccount',
          text: 'Yes, Delete Account',
        },
      ],
    };
    this.globals.openModal('successmodal')
  }

  onLogout() {
    this.globals.modalData = {
      title: 'Logging Out?',
      color: 'danger',
      iconName: 'alert-circle-outline',
      description:
        'Your account will be permanently deleted, do you want to proceed ?',
      buttons: [
        {
          action: 'no',
          text: 'No, Cancel',
        },
        {
          action: 'logout',
          text: 'Yes, Log Out',
        },
      ],
    };
    this.globals.openModal('successmodal')
  }
}
