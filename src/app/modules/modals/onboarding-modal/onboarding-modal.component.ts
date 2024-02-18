import { NgIf, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton, IonGrid } from '@ionic/angular/standalone';
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
    IonToolbar, IonSearchbar, IonButton, IonRouterLink, IonRow, IonCol, IonFabButton, IonGrid
  ]
})
export class OnboardingModalComponent {

  @Input() isOpen: boolean = false;
  public readonly globals: GlobalsServices = inject(GlobalsServices);

}
