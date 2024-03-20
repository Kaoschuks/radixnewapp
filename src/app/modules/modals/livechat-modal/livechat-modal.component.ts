import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { GlobalsServices } from 'src/app/core';
import { FullModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'livechat-modal',
  templateUrl: './livechat-modal.component.html',
  styleUrls: ['./livechat-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FullModalComponent, IonContent]
})
export class LivechatModalComponent  implements OnChanges {

  @ViewChild('livechat') iframe!: ElementRef;

  @Input() isOpen: boolean = false
  globals: GlobalsServices = inject(GlobalsServices);
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onIframeLoad() {
    const currentUrl = this.iframe.nativeElement.contentWindow.location.href;
    console.log('Current URL:', currentUrl);
  }
  

}
