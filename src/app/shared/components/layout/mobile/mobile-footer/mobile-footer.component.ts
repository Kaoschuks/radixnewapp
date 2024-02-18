import { ChangeDetectionStrategy, Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { icons } from 'src/app/core/utils/assets';

@Component({
  selector: 'mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class MobileFooterComponent {
  homeActiveIcon: string = icons.homeActive
  homeIcon: string = icons.homeOutline
  accountActiveIcon: string = icons.accountActive
  accountIcon: string = icons.accountOutline
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ 
      triangle, ellipse, square,
      homeactive: icons.homeBlue,
      home: icons.homeOutline
    });
  }

}
