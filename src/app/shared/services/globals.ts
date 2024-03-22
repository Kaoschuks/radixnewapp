import { Location } from "@angular/common";
import { ErrorHandler, Injectable, Injector, inject } from "@angular/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  MenuController,
  NavController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { ActivatedRoute, ActivationStart, Router } from "@angular/router";
import { LocalNotifications } from "@capacitor/local-notifications";
import { StorageService } from "./storage";
import { configModel, currency } from "src/app/core";
import { App } from "@capacitor/app";
import { NavigationBar, NavigationBarPluginEvents } from '@hugotomazi/capacitor-navigation-bar';
import { BehaviorSubject } from "rxjs";

const LOGTAG = '[GlobalErrorHandlerService]';

@Injectable({
  providedIn: "root",
})

export class GlobalsServices {

  private injector: Injector = inject(Injector)
  public platform: Platform = inject(Platform)
  public navCtrl: NavController = inject(NavController)
  public loadingCtrl: LoadingController = inject(LoadingController)
  public alertCtrl: AlertController = inject(AlertController)
  public actionSheetCtrl: ActionSheetController = inject(ActionSheetController)
  public router: Router = inject(Router)
  public menuCtrl: MenuController = inject(MenuController)
  public route: ActivatedRoute = inject(ActivatedRoute)
  public location: Location = inject(Location)


  config: configModel = {
    login: false,
    pin: '',
    currency: currency
  }
  modalData: any = {
    buttons: null,
    color: null,
    description: null,
    title: null
  }

  pageData: any
  appLoading: boolean = true;
  refresh = new BehaviorSubject<boolean>(false);
  pageRefresh: boolean = false;
  toast = {
    open: false,
    message: '',
    cssClass: 'toast-default',
    position: 'bottom',
    duration: 3000
  }
  loading: any = {
    open: false,
    duration: 0,
    message: '',
    hide: async () => {
      await this.loadingCtrl.dismiss();
    },
    show: async (message: string, duration: number = 3000) => {
      await this.showLoader(message, duration)
    },
  }

  private async showLoader(message: string, duration: number) {
    this.loading.open = true;
    this.loading.duration = duration;
    this.loading.message = message;

    setTimeout(() => {
      this.loading.open = false;
      this.loading.duration = 0;
      this.loading.message = '';
    }, duration)
  }

  setUrlTitle() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) this.pageData = event.snapshot.data;
    });
  }

  async requestPermission() {
    await LocalNotifications.checkPermissions();
  }

  async localNotification(data: {
    title: string;
    body: string;
    id: number;
    schedule: any;
  }) {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: data.title,
          body: data.body,
          id: Math.floor(Math.random() * 10000) + 1,
          schedule: {
            at: new Date(Date.now() + 500),
            repeats: false,
          },
        },
      ],
    });
  }

  async notifyAlert(title: string = "Error", message: string) {
    let alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ["Close"],
    });
    alert.present();
  }

  async toastAlert(
    message: string,
    { duration = 1000, cssClass = "toast-deafult", position = "bottom" } = {}
  ) {
    this.toast = {
      open: true,
      duration: duration,
      message: message,
      cssClass: cssClass,
      position: position || "bottom",
    };
  }

  navigate(path: string, subpage: boolean = true) {
    subpage
      ? this.router.navigate([path], { replaceUrl: subpage })
      : this.navCtrl.navigateRoot(path);
  }

  openModal(id: string) {
    this.modalData[id] = true;
    document.getElementById(id)?.click()
  }

  closeModal(id: string) {
    this.modalData[id] = false;
  }

  clickId(id: string) {
    document.getElementById(id)?.click()
  }

  async loggedOut() {
    const storageService: StorageService =
      this.injector.get<StorageService>(StorageService);

    this.config.login = false;
    await storageService.clear();
    window.location.href = "/"
  }

  async changeNavigatorbarColor(color: string, isDark: boolean = true) {
    if(this.platform.is('capacitor')) await NavigationBar.setColor({
      color: color,
      darkButtons: isDark
    });
    await NavigationBar.show()
  }

  async changeStatusBarColor(color: string = '', isLight: boolean = false, noStatus: boolean = true) {
    if(this.platform.is('capacitor')) {
      setTimeout(async () => {
        await StatusBar.setStyle({
          style: (isLight == false) ? Style.Light : Style.Dark
        })
        await StatusBar.setBackgroundColor({ color: color });
      }, 500);
    }
  }

  exitApp() {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.router.url === '/home') App.exitApp();
    });
  }

  get isLight(): boolean {
    const body: any = document.getElementById('body');
    return body.classList.contains("light")
  }

  async changeTheme() {

    await this.changeStatusBarColor('#ffffff', false, false)
    // const body: any = document.getElementById('body');
    
    // switch (this.isLight) {
    //   case true:
    //     body?.classList.add('dark'); body?.classList.remove('light');
    //     await this.changeStatusBarColor('#ffffff', false, false)
    //     // await this.changeStatusBarColor('#f4f5f8', false, false)
    //     // await this.changeNavigatorbarColor('#1e2023', false)
    //     break;
    //   case false:
    //     body?.classList.add('light'); body?.classList.remove('dark')
    //     await this.changeStatusBarColor('#1e2023', true, false)
    //     // await this.changeNavigatorbarColor('#000000', true)
    //     break;
    // }
  }
}


@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  public handleError(error: unknown): void {
    this.handle(error);
  }

  private async handle(error: unknown): Promise<void> {
    try {
      const message = this.getMessageFromUnknownError(error);
      await this.showErrorAlert(message);
    } catch (errorHandlerError) {
      console.error(`${LOGTAG} Internal exception:`, errorHandlerError);
    }
  }

  private getMessageFromUnknownError(error: unknown): string {
    let message = 'An unknown error has occurred.';
    if (error instanceof Object && 'rejection' in error) {
      error = (error as any).rejection;
    }
    if (error instanceof Error && error.message) {
      message = error.message;
    }
    return message;
  }

  private async showErrorAlert(message: string): Promise<void> {
    const globalService: GlobalsServices =
      this.injector.get<GlobalsServices>(GlobalsServices);
    console.error(message);
  }
}