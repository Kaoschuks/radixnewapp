import { NgIf, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonToolbar, IonButton, IonItem, IonLabel, IonHeader, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FullModalComponent, OnboardingComponent } from 'src/app/shared/components';
import { GlobalsServices } from 'src/app/shared/services';

@Component({
  selector: 'onboarding-modal',
  templateUrl: './onboarding-modal.component.html',
  styleUrls: ['./onboarding-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf, NgClass,
    FullModalComponent, OnboardingComponent,
    IonContent, IonToolbar, IonHeader, IonTitle, IonButton, IonItem, IonLabel, RouterModule
  ]
})
export class OnboardingModalComponent implements OnChanges {

  @Input() isOpen: boolean = false;
  public readonly globals: GlobalsServices = inject(GlobalsServices);

  async ngOnChanges(changes: SimpleChanges) {
    await this.globals.changeStatusBarColor('#ffffff', false, true)
  }

  async resetStatusBar() {
    await this.globals.changeStatusBarColor('#ffffff', false, false)
  }
}
