import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { GlobalsServices } from './shared/services';
import { register } from 'swiper/element/bundle';
import { OnloadingComponent } from './shared/components';
import { NgIf } from '@angular/common';
import { FaqModalComponent } from './modules/modals';
import { SplashScreen } from '@capacitor/splash-screen';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, OnloadingComponent, NgIf, FaqModalComponent],
})
export class AppComponent implements AfterViewInit {
  globals: GlobalsServices = inject(GlobalsServices)

  async ngAfterViewInit() {
    try {
      await this.globals.platform.ready();
      await this.globals.exitApp();
      if(this.globals.platform.is('capacitor')) await SplashScreen.hide();
      setTimeout(() => { 
        this.globals.appLoading = false;
      }, 1000);
    } catch (error) {
      console.log(error)
      this.globals.appLoading = false; 
    }
  }
}
