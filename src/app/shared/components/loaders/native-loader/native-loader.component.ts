import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonLoading } from '@ionic/angular/standalone';

@Component({
  selector: 'native-loader',
  templateUrl: './native-loader.component.html',
  styleUrls: ['./native-loader.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLoading
  ]
})
export class NativeLoaderComponent {

  @Input() isOpen: boolean = false;
  @Input() duration: number = 3000;
  @Input() message!: string;

}
