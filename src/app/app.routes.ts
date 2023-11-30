import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent)
    },
    {
        path: '',
        loadComponent: () => import('./dashboard-layout/dashboard-layout.component').then((c) => c.DashboardLayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
            }
        ]
    }

];
