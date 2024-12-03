import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { BranchListComponent } from './components/branch-list/branch-list.component';

@Component({
  selector: 'branch-modal',
  templateUrl: './branch-modal.component.html',
  styleUrls: ['./branch-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FullModalComponent, 
    BranchListComponent
  ]
})
export class BranchModalComponent  implements OnInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);

  constructor() { }

  ngOnInit() {}

}
