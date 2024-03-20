import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonCol, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonRow, IonCol, NgIf]
})
export class NoContentComponent implements OnInit {

  @Input() useImage: boolean = true;
  constructor() { }

  ngOnInit() {}

}
