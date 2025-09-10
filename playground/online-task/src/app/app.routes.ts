import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/homepage/homepage').then(m => m.Homepage),
    title: 'ECT | Feature'
  },
];
