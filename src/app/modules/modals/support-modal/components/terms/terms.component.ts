import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLabel, IonItem
  ]
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
