import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/homepage/homepage'),
    title: 'ECT | Homepage'
  },
  {
    path: 'page-one',
    loadComponent: () => import('../features/page-one/page-one'),
    title: 'ECT | Page One'
  },
  {
    path: 'page-two',
    loadComponent: () => import('../features/page-two/page-two'),
    title: 'ECT | Page Two'
  },
  {
    path: '**',
    loadComponent: () => import('../features/page-not-found/page-not-found'),
    title: 'ECT | Page Not Found'
  },
];
