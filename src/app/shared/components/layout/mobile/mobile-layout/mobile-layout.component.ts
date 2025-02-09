import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class MobileLayoutComponent implements OnChanges {
  @Input() title!: string
  @Input() username!: string
  @Input() accountnumber!: string
  @Input() refresh: boolean = false
  @Input() color: string = 'white';
  @Output() onHeaderButtonClicked = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.username)
  }
}
