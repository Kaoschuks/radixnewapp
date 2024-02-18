import { NgIf, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { IonSearchbar, IonToolbar } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf, NgClass,
    FullModalComponent, IonToolbar, IonSearchbar
  ]
})
export class LanguageModalComponent {
  @Input() isOpen: boolean = false;
  globals: GlobalsServices = inject(GlobalsServices);
}
