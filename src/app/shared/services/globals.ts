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
import { configModel } from "src/app/core";
import { App } from "@capacitor/app";
import { NavigationBar, NavigationBarPluginEvents } from '@hugotomazi/capacitor-navigation-bar';

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
  public toastCtrl: ToastController = inject(ToastController)
  public actionSheetCtrl: ActionSheetController = inject(ActionSheetController)
  public router: Router = inject(Router)
  public menuCtrl: MenuController = inject(MenuController)
  public route: ActivatedRoute = inject(ActivatedRoute)
  public location: Location = inject(Location)


  config!: configModel
  modalData: any = {
    buttons: null,
    color: null,
    description: null,
    title: null
  }
  pageData: any
  appLoading: boolean = true;
  pageRefresh: boolean = false;
  loading: any = {
    hide: async () => {
      await this.loadingCtrl.dismiss();
    },
    show: async (message: string, duration: number = 3000) => {
      await this.showLoader(message, duration)
    },
  }

  private async showLoader(message: string, duration: number) {
    const loading = await this.loadingCtrl.create({
      message: message,
      backdropDismiss: false,
      keyboardClose: true,
      showBackdrop: true,
      duration: duration,
    });
    await loading.present();
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
    { duration = 3000, cssClass = "toast-deafult", position = "bottom" } = {}
  ) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position:
        position == "top" ? "top" : position == "middle" ? "middle" : "bottom",
      cssClass: cssClass,
    });
    toast.present();
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
    this.menuCtrl.enable(false);
    this.navigate("/auth/login", false);
  }

  async changeNavigatorbarColor(color: string, isDark: boolean = true) {
    if(this.platform.is('capacitor')) await NavigationBar.setColor({
      color: color,
      darkButtons: isDark
    });await NavigationBar.show()
  }

  async changeStatusBarColor(color: string = '', isLight: boolean = true, noStatus: boolean = true) {
    if(this.platform.is('capacitor')) {
      setTimeout(async () => {
        await StatusBar.setStyle({
          style: (isLight == false) ? Style.Light : Style.Dark
        })
        await StatusBar.setBackgroundColor({ color: color });
      }, 100);
    }
  }

  exitApp() {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.router.url === '/home') App.exitApp();
    });
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
    console.log(message);
    // await globalService.toastAlert(message);
  }
}