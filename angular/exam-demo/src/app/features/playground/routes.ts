import { Routes } from '@angular/router';

import { Playground } from './playground';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'kanto',
    pathMatch: 'full'
  },
  {
    path: 'kanto',
    loadComponent: () => import('./pages/1-kanto').then(m => m.Kanto),
    title: 'Kanto Region'
  },
  {
    path: 'johto',
    loadComponent: () => import('./pages/2-johto').then(m => m.Johto),
    title: 'Johto Region'
  },
  {
    path: 'hoenn',
    loadComponent: () => import('./pages/3-hoenn').then(m => m.Hoenn),
    title: 'Hoenn Region'
  },
  {
    path: 'sinnoh',
    loadComponent: () => import('./pages/4-sinnoh').then(m => m.Sinnoh),
    title: 'Sinnoh Region'
  }
];

export const pageRoutes: Routes = [
  {
    path: '',
    component: Playground,
    children: routes,
  }
];
