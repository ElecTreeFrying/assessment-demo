import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../features/home').then(m => m.Home),
    title: 'ECT | Assessment Homepage'
  },
  {
    path: 'sorting-pipe',
    loadComponent: () => import('../features/sorting-pipe').then(m => m.SortingPipe),
    title: 'ECT | Custom Sort Pipe'
  },
  {
    path: 'repeater',
    loadComponent: () => import('../features/repeater').then(m => m.Repeater),
    title: 'ECT | Repeater Template'
  },
  {
    path: '**',
    loadComponent: () => import('../features/not-found').then(m => m.NotFound),
    title: 'ECT | Page Not Found'
  }
];
