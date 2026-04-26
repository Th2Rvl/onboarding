import { Injectable } from '@angular/core';
import { Member } from '../core/models/member';

@Injectable({
  providedIn: 'root',
})
export class Members {
  private members: Member[] = [];

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
