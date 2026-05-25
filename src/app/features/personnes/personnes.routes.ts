import { Route, ActivatedRouteSnapshot } from '@angular/router';
import { PersonnesCrud } from './services/personnes.crud';
import { inject } from '@angular/core';

export const personnesRoutes: Route[] = [
  {
    path: 'detail/:persId',
    resolve: {
      personne: (route: ActivatedRouteSnapshot) => {
        const personnesCrud = inject(PersonnesCrud);
        const persId = route.paramMap.get('persId');
        return personnesCrud.getPersonnesById(persId);
      },
    },
    loadComponent: () =>
      import('./pages/personnes-detail/personnes-detail.page').then(
        (comp) => comp.PersonnesDetailPage,
      ),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./pages/personnes-list/personnes-list.page').then((comp) => comp.PersonnesListPage),
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
