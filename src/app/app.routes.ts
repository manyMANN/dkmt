import { Routes } from '@angular/router';
import { LayoutComponent } from './dmkt/layout/layout';
import HomeComponent from './dmkt/pages/home/home';

export const routes: Routes = [
{
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ],
  },
  { path: '**', redirectTo: '' },
  {
    path: '',
    loadComponent: () => import('./dmkt/pages/home/home')
  },
];
