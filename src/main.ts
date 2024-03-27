import { APP_INITIALIZER, ErrorHandler, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IonicRouteStrategy, iosTransitionAnimation, mdTransitionAnimation, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { GlobalErrorHandlerService , GlobalsServices, RequestInterceptorService, RequestService, StorageService } from './app/core';
import { SplashScreen } from '@capacitor/splash-screen';

// import 'remixicon/fonts/remixicon.css'


if (environment.production) {
  enableProdMode();
  defineCustomElements(window);
}

export function initializeApp(
  globals: GlobalsServices, 
) {
  return async () => { 
    try {
      globals.setUrlTitle();
    } catch (error) {
      console.log(error)
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    RequestService, StorageService, GlobalsServices,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    importProvidersFrom(BrowserAnimationsModule),
    provideIonicAngular({
      animated: true,
      navAnimation: mdTransitionAnimation,
      sanitizerEnabled: true,
      mode: 'md',
      swipeBackEnabled: true,
    }),
    provideRouter(
      routes, withComponentInputBinding()
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializeApp,
      deps: [ GlobalsServices ], 
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
});
