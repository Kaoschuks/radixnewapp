import { NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { LoadingComponent } from '../../loaders/loading/loading.component';

@Component({
  selector: 'half-modal',
  templateUrl: './half-modal.component.html',
  styleUrls: ['./half-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonIcon, IonTitle, IonContent, IonFooter,
    NgIf, NgClass, LoadingComponent, TitleCasePipe
  ]
})
export class HalfModalComponent {

  @Input() id: string | undefined;
  @Input() open: boolean = false;
  @Input() initialBreakpoint: number = 0.2
  @Input() endBreakpoint: number = 0.6
  @Input() bodyColor: string = 'white';
  @Output() closeModal = new EventEmitter();


}
