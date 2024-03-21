import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';
import { IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonToast
  ]
})
export class ToastMessageComponent  implements OnChanges {

  @Input() isOpen: boolean = false;
  @Input() duration: number = 3000;
  @Input() message!: string;
  @Input() position!: string;
  @Input() cssClass!: string;

  toastButtons = [
    {
      text: 'Dismiss',
      role: 'cancel',
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
  }
}
