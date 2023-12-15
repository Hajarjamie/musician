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
            },

            {
                path: 'group',
                children: [
                    {
                        path: 'list',
                        loadComponent: () => import('./pages/band/group/group-list/group-list.component').then((c) => c.GroupListComponent)
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./pages/band/group/group-detail/group-detail.component').then((c) => c.GroupDetailComponent)
                    },
                    {
                        path: ':id',
                        loadComponent: () => import('./pages/band/group/group-detail/group-detail.component').then((c) => c.GroupDetailComponent)
                    }
                ]
            },
            
            {
                path: 'concerts',
                children: [
                    {
                        path: 'list',
                        loadComponent: () => import('./pages/concert/concerts/concerts-list/concerts-list.component').then((c) => c.ConcertsListComponent)
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./pages/concert/concerts/concerts-detail/concerts-detail.component').then((c) => c.ConcertsDetailComponent)
                    },
                    {
                        path: ':id',
                        loadComponent: () => import('./pages/concert/concerts/concerts-detail/concerts-detail.component').then((c) => c.ConcertsDetailComponent)
                    }
                ]
            },
            {
                path: 'bands',
                children: [
                    {
                        path: 'list',
                        loadComponent: () => import('./pages/concert-band/bands/bands-list/bands-list.component').then((c) => c.BandsListComponent)
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./pages/concert-band/bands/bands-detail/bands-detail.component').then((c) => c.BandsDetailComponent)
                    },
                    {
                        path: ':id',
                        loadComponent: () => import('./pages/concert-band/bands/bands-detail/bands-detail.component').then((c) => c.BandsDetailComponent)
                    }
                ]
            },

         {  path: 'house',
                children: [
                    {
                        path: 'list',
                        loadComponent: () => import('./pages/home/house/house-list/house-list.component').then((c) => c.HouseListComponent)
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./pages/home/house/house-detail/house-detail.component').then((c) => c.HouseDetailComponent)
                    },
                    {
                        path: ':id',
                        loadComponent: () => import('./pages/home/house/house-detail/house-detail.component').then((c) => c.HouseDetailComponent)
                    }
                ]
            }, 

            {  path: 'jazz',
            children: [
                {
                    path: 'list',
                    loadComponent: () => import('./pages/instrument/jazz/jazz-list/jazz-list.component').then((c) => c.JazzListComponent)
                },
                {
                    path: 'new',
                    loadComponent: () => import('./pages/instrument/jazz/jazz-detail/jazz-detail.component').then((c) => c.JazzDetailComponent)
                },
                {
                    path: ':id',
                    loadComponent: () => import('./pages/instrument/jazz/jazz-detail/jazz-detail.component').then((c) => c.JazzDetailComponent)
                }
            ]
        }, 

        
        {  path: 'singer',
        children: [
            {
                path: 'list',
                loadComponent: () => import('./pages/role/singer/singer-list/singer-list.component').then((c) => c.SingerListComponent)
            },
            {
                path: 'new',
                loadComponent: () => import('./pages/role/singer/singer-detail/singer-detail.component').then((c) => c.SingerDetailComponent)
            },
            {
                path: ':id',
                loadComponent: () => import('./pages/role/singer/singer-detail/singer-detail.component').then((c) => c.SingerDetailComponent)
            }
        ]
    }, 
    {  path: 'drums',
    children: [
        {
            path: 'list',
            loadComponent: () => import('./pages/role-instrument/drums/drums-list/drums-list.component').then((c) => c.DrumsListComponent)
        },
        {
            path: 'new',
            loadComponent: () => import('./pages/role-instrument/drums/drums-details/drums-details.component').then((c) => c.DrumsDetailsComponent)
        },
        {
            path: ':id',
            loadComponent: () => import('./pages/role-instrument/drums/drums-details/drums-details.component').then((c) => c.DrumsDetailsComponent)
        }
    ]
}, 

   ] }, ]
