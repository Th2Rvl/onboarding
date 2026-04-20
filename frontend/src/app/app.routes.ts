import { Routes } from '@angular/router';
import { Members } from './pages/members/members';
import { Teams } from './pages/teams/teams';

export const routes: Routes = [
    { path: 'members', component: Members },
    { path: 'teams', component: Teams },
    { path: 'teams/:teamId/membres', component: Members, pathMatch: 'prefix'},

    // pathMatch full = l'url doit être exactement la même pour faire la redirection
    { path: '', redirectTo: 'teams', pathMatch: 'full' },
    // ** redirection des routes inconus
    { path : '**', redirectTo: 'teams' }
];