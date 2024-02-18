import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent]
})
export class NotificationModalComponent  implements OnInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }

  ngOnInit() {}

}
