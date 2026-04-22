import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../core/models/team';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamsApiService {
    private http = inject(HttpClient);
    private baseUrl = `${environment.apiUrl}/teams`;

    getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(this.baseUrl);
    }

    createTeam(nom: string): Observable<Team> {
        return this.http.post<Team>(this.baseUrl, { nom });
    }
}
