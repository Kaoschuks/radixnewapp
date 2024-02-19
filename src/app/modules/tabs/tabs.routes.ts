import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardsService } from 'src/app/core';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthGuardsService],
    children: [
      {
        path: 'home',
        data: {
          title: 'home'
        },
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'settings',
        data: {
          title: 'my account'
        },
        loadComponent: () =>
          import('../settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'accounts',
        data: {
          title: 'accounts'
        },
        loadComponent: () => import('../accounts/accounts.page').then((m) => m.AccountsPage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('../login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('../register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'forgot',
    loadComponent: () => import('../forgot/forgot.page').then( m => m.ForgotPage)
  },
];
