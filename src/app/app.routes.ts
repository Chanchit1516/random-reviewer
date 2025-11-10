import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';


export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'custom',
                loadChildren: () => import('./pages/custom/custom.module').then(m => m.CustomModule)
            },
            {
                path: '**',
                redirectTo: "home"
            }
        ]
    }
];
