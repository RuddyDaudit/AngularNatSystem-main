import { Route, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const paysRoutes: Route[] = [
  {
    path: 'list',
    loadComponent: () =>
      import('./pages/pays-list/pays-list.page').then((comp) => comp.PaysListPage),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];
