import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonLabel, IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonSpinner, IonLabel, TitleCasePipe]
})
export class LoadingComponent {
  @Input() text: string = '';
  @Input() color: string = 'dark';
}
