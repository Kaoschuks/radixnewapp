import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonTitle, IonToolbar, IonModal } from '@ionic/angular/standalone';
import { LoadingComponent } from '../../loaders/loading/loading.component';
import { addIcons } from 'ionicons';
import { chevronDownOutline, chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'full-modal',
  templateUrl: './full-modal.component.html',
  styleUrls: ['./full-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonIcon, IonTitle, IonContent, IonFooter,
    NgIf, NgClass, LoadingComponent, TitleCasePipe
  ]
})
export class FullModalComponent {
  @Input() isLoading: boolean = false;
  @Input() loadingText!: string
  @Input() id: string | undefined;
  @Input() asPage: boolean = false;
  @Input() title: string | undefined;
  @Input() headerColor: string = 'white';
  @Input() headerClass: string = '';
  @Input() footerClass: string = 'hidden';
  @Input() hasHeader: boolean = true;
  @Input() initalPadding: boolean = true;
  @Input() backDropDismiss: boolean = true;
  @Input() open: boolean = false;
  @Input() bodyColor: string = 'light';
  @Input() modalClass: string = 'modal-full';
  @Output() closeModal = new EventEmitter();

  constructor() {
    addIcons({ 
      "chevron-down-outline": chevronDownOutline,
      "chevron-back-outline": chevronBackOutline
    });
  }

  get height() {
    return window.innerHeight;
  }
}
