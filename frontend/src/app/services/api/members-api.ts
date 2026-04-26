import { Injectable, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Members } from '../../pages/members/members';
import { Observable } from 'rxjs';
import { Member } from '../../core/models/member';

@Injectable({
  providedIn: 'root',
})
export class MembersApi {
  private http = inject(HttpClient);

  getMembers(teamId: number): Observable<Member[]> {
    const url = `${environment.apiUrl}/teams/${teamId}/members`;
    return this.http.get<Member[]>(url);
  }

  createMember(teamId: number, member: Object): Observable<Member> {
    const url = `${environment.apiUrl}/teams/${teamId}/members`;
    return this.http.post<Member>(url, member)
  }
}