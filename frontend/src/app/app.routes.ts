import { Routes } from '@angular/router';
import { Members } from './pages/members/members';
import { Teams } from './pages/teams/teams';

export const routes: Routes = [
    { path: 'members', component: Members },
    { path: 'teams', component: Teams },

    { path: '', redirectTo: 'members', pathMatch: 'full' }
];