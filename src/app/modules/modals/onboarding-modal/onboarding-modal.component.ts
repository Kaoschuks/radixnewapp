import { NgIf, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonToolbar, IonButton, IonItem, IonLabel, IonHeader, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FullModalComponent, OnboardingComponent } from 'src/app/shared/components';
import { GlobalsServices } from 'src/app/shared/services';
import { AccountTypeSelectComponent } from './components/account-type-select/account-type-select.component';

@Component({
  selector: 'onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf, NgClass,
    FullModalComponent, OnboardingComponent, AccountTypeSelectComponent,
    IonContent, IonToolbar, IonHeader, IonTitle, IonButton, IonItem, IonLabel, RouterModule
  ]
})
export class OnboardingModalComponent implements OnChanges {

  @Input() isOpen: boolean = false;

  screen: 'onboarding' | 'account-type' = 'onboarding';

  public readonly globals: GlobalsServices = inject(GlobalsServices);
  private readonly router: Router = inject(Router);
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']?.currentValue === true) {
      this.screen = 'onboarding';
    }
    await this.globals.changeStatusBarColor('#ffffff', false, true);
  }

  showAccountTypeSelect() {
    this.screen = 'account-type';
    this.cdr.markForCheck();
  }

  goBackToOnboarding() {
    this.screen = 'onboarding';
    this.cdr.markForCheck();
  }

  async onAccountTypeSelected(type: 'ppp' | 'rsa') {
    this.globals.closeModal('walkthroughmodal');
    await this.resetStatusBar();
const route = type === 'ppp' ? '/register' : '/register-rsa';
    this.router.navigate([route]);
  }

  async resetStatusBar() {
    await this.globals.changeStatusBarColor('#ffffff', false, false);
  }
}
