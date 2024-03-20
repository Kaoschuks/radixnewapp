import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { alertCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonicModule, CommonModule
  ]
})
export class SuccessModalComponent {
  @Input() data: any
  @Input() isOpen: boolean = false
  @Input() class: string = 'modal-w80';
  @Input() activeColor: string = 'primary';
  @Output() continue = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  
  constructor() {
    addIcons({
      "alert-circle-outline": alertCircleOutline
    })
  }
}
