import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'header-section',
    pathMatch: 'full'
    },
    {
    path: 'header-section',
    loadComponent: () => import('./header-section/header-section.component').then((m) => m.HeaderSectionComponent),
    data: { title: 'header-section' },
    },
    {
    path: 'why-hrms-section',
    loadComponent: () => import('./why-hrms-section/why-hrms-section.component').then((m) => m.WhyHrmsSectionComponent),
    data: { title: 'why-hrms-section' },
    },
    {
    path: 'all-in-one-hr-section',
    loadComponent: () => import('./all-in-one-hr-section/all-in-one-hr-section.component').then((m) => m.AllInOneHrSectionComponent),
    data: { title: 'all-in-one-hr-section' },
    },
    {
    path: 'footer-section',
    loadComponent: () => import('./footer-section/footer-section.component').then((m) => m.FooterSectionComponent),
    data: { title: 'footer-section' },
    },
];
