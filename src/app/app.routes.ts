import { Routes } from '@angular/router';
import { DashboardPage } from './features/dashboards/pages/dashboard/dashboard.page';


export const routes: Routes = [
    {
        path: 'home',
        component:DashboardPage
    },
    {
        path: 'personnes',
        loadChildren:() => import('./features/personnes/personnes.routes').then(rte => rte.personnesRoutes)
    },
    {
        path:'pays',
        loadChildren:() =>import('./features/pays/pays.routes').then(rte => rte.paysRoutes)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
      path: '**',
      loadComponent: () => import('./core/not-found/not-found.page').then(rte => rte.NotFoundPage)
    }
];
