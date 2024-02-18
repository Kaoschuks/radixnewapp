import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonRow, IonCol]
})
export class NoContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
