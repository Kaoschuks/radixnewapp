import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { NgIf } from '@angular/common';
import { PrivacyComponent, TermsComponent } from './components';
import { IonCard, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'support-modal',
  templateUrl: './support-modal.component.html',
  styleUrls: ['./support-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonContent, IonCard,
    FullModalComponent, PrivacyComponent, TermsComponent,
    NgIf
  ]
})
export class SupportModalComponent  implements OnInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }

  ngOnInit() {}

}
