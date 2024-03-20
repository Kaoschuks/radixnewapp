import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'actions-modal',
  templateUrl: './actions-modal.component.html',
  styleUrls: ['./actions-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent]
})
export class ActionsModalComponent  implements OnInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);

  ngOnInit() {}

}
