import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { IonApp, IonMenu, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';
import { GlobalsServices } from './shared/services';
import { register } from 'swiper/element/bundle';
import { OnloadingComponent, SidebarNavComponent } from './shared/components';
import { NgIf } from '@angular/common';
import { FaqModalComponent } from './modules/modals';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, OnloadingComponent, IonSplitPane, IonMenu, NgIf, SidebarNavComponent, FaqModalComponent],
})
export class AppComponent implements AfterViewInit {
  globals: GlobalsServices = inject(GlobalsServices)

  async ngAfterViewInit() {
    try {
      await this.globals.platform.ready();
      await this.globals.changeStatusBarColor('#f5f6f9', true, false);
      await this.globals.changeNavigatorbarColor('#f5f6f9', true);
      await this.globals.menuCtrl.enable(false)
      this.globals.appLoading = false;
    } catch (error) {
      console.log(error)
      this.globals.appLoading = false; 
    }
  }
}
