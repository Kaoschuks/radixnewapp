import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';
import { FaqsListsComponent } from '../../micropension/components/faqs-lists/faqs-lists.component';

@Component({
  selector: 'faq-modal',
  templateUrl: './faq-modal.component.html',
  styleUrls: ['./faq-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent, FaqsListsComponent]
})
export class FaqModalComponent  implements OnInit {

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);

  constructor() { }

  ngOnInit() {}

}
