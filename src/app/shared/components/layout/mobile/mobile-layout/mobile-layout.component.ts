import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { MobileFooterComponent } from '../mobile-footer/mobile-footer.component';

@Component({
  selector: 'mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MobileHeaderComponent, MobileFooterComponent]
})
export class MobileLayoutComponent {
  @Input() title!: string
  @Input() refresh: boolean = false
  @Input() color: string = 'white';
  @Output() onHeaderButtonClicked = new EventEmitter();
}
