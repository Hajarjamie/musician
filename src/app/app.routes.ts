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
            },
            {
                path: 'artist',
                children: [
                    {
                        path: 'list',
                        loadComponent: () => import('./pages/artist/artist-list/artist-list.component').then((c) => c.ArtistListComponent)
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./pages/artist/artist-detail/artist-detail.component').then((c) => c.ArtistDetailComponent)
                    },
                    {
                        path: ':id',
                        loadComponent: () => import('./pages/artist/artist-detail/artist-detail.component').then((c) => c.ArtistDetailComponent)
                    }
                ]
            }
        ]
    }

];
