import { NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonProgressBar, IonHeader, IonToolbar, IonTitle, IonButton, IonRouterLink, IonButtons, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader, IonToolbar, IonTitle , IonProgressBar, IonButton, IonButtons, IonIcon, 
    NgIf, TitleCasePipe, UpperCasePipe,
    RouterModule
  ]
})
export class MobileHeaderComponent{
  @Input() title!: string
  @Input() refresh!: boolean
  @Input() color!: string;
  @Input() username!: string;
  @Input() accountnumber!: string;
  @Output() onclick = new EventEmitter();

  constructor() {
  }

  get greetings(): any {
    var date = new Date();
    var hour = date.getHours();
    return hour < 12
      ? "Good Morning"
      : hour >= 12 && hour <= 17
      ? "Good Afternoon"
      : hour >= 17 && hour <= 24
      ? "Good Evening"
      : "Good Day";
  }
}
