import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLabel, IonItem
  ]
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
