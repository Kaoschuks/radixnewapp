import { Component, inject } from '@angular/core';
import { MobileLayoutComponent, SuccessModalComponent } from 'src/app/shared/components';
import { GlobalsServices } from 'src/app/shared/services';
import { LowerCasePipe, NgIf } from '@angular/common';
import { LanguageModalComponent, NotificationModalComponent, ProfileModalComponent } from '../modals';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    NgIf, LowerCasePipe,
    LanguageModalComponent, NotificationModalComponent, ProfileModalComponent,
    MobileLayoutComponent, SuccessModalComponent
  ],
})

export class TabsPage {
  globals: GlobalsServices = inject(GlobalsServices);
  canOnboard: boolean = false;
  
  onModalClosed(event: any) {

  }
}
