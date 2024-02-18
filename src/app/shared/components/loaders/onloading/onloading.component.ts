import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'onloading',
  templateUrl: './onloading.component.html',
  styleUrls: ['./onloading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, IonItem, IonSpinner, IonLabel, NgClass, LoadingComponent]
})
export class OnloadingComponent {

  @Input() useImage: boolean = true
  @Input() bgColor: string = 'bg-white'
}
