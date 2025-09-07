import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/homepage/homepage').then(m => m.Homepage),
    title: 'ECT | Homepage'
  },
  {
    path: 'page-one',
    loadComponent: () => import('../features/page-first/page-first').then(m => m.PageFirst),
    title: 'ECT | Page One'
  },
  {
    path: 'page-two',
    loadComponent: () => import('../features/page-second/page-second').then(m => m.PageSecond),
    title: 'ECT | Page Two'
  },
  {
    path: '**',
    loadComponent: () => import('../features/page-not-found/page-not-found').then(m => m.PageNotFound),
    title: 'ECT | Page Not Found'
  }
];
