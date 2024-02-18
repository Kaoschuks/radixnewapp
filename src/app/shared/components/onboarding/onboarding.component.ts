import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit, ViewChild, inject } from '@angular/core';
// import { ModalController } from '@ionic/angular';
import { IonButton, IonLabel, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonLabel, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OnboardingComponent {
  @ViewChild(IonModal) modal: any;
  // public readonly modalCtrl: ModalController = inject(ModalController)

}
