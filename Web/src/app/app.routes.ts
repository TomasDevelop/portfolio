import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'aboutme',
        loadChildren: () => import('@Layout/modules').then(m => m.LayoutRoutingModule)
    },
    {
        path: '**',
        pathMatch:'full',
        redirectTo: '/aboutme'
    }
];
