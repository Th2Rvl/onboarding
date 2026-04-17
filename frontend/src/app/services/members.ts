import { Injectable } from '@angular/core';
import { Member } from '../core/models/member';

@Injectable({
  providedIn: 'root',
})
export class Members {
  private members: Member[] = [
    { nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', role: 'admin', teamId: 1 },
    { nom: 'Martin', prenom: 'Sophie', email: 'sophie.martin@email.com', role: 'membre', teamId: 1 },
    { nom: 'Durand', prenom: 'Pierre', email: 'pierre.durand@email.com', role: 'membre', teamId: 2 },
  ];

  getMembers(): Member[] {
    return this.members;
  }

  getMembersByTeam(teamId: number): Member[] { 
    return this.members.filter((member) => member.teamId == teamId);
  }

  addMember(member: Member): void {
    this.members.push(member);
  }
}
