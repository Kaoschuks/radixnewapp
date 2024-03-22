import { NgIf, TitleCasePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonProgressBar, IonHeader, IonToolbar, IonTitle, IonButton, IonRouterLink, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline, personCircleOutline, searchOutline } from 'ionicons/icons';

@Component({
  selector: 'mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader, IonToolbar, IonTitle , IonProgressBar, IonButton, IonButtons, IonIcon, 
    NgIf, TitleCasePipe,
    RouterModule
  ]
})
export class MobileHeaderComponent{
  @Input() title!: string
  @Input() refresh!: boolean
  @Input() color!: string;
  @Input() username: string = "Chikeluba Chukwuemeka Favour";
  @Output() onclick = new EventEmitter();

  constructor() {
    addIcons({ 
      "person-circle-outline": personCircleOutline,
      "notifications-outline": notificationsOutline,
      "search-outline": searchOutline
    });
  }
}
