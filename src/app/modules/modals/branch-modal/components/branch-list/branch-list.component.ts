import { NgFor, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonAvatar, IonImg, IonItem, IonLabel } from '@ionic/angular/standalone';
import { branches } from 'src/app/core';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonItem, IonLabel, IonAvatar, IonImg, IonAccordionGroup, IonAccordion,
    TitleCasePipe, NgFor
  ]
})
export class BranchListComponent  implements OnInit {
  @Input() branches: any[] = branches

  constructor() { }

  ngOnInit() {}

}
