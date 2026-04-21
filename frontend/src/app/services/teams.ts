import { Injectable } from '@angular/core';
import { Team } from '../core/models/team';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Teams {
  private teams: Team[] = [
    { id: 1, nom: 'Développement' },
    { id: 2, nom: 'Marketing' },
    { id: 3, nom: 'Design' }
  ];
  
  getTeams(): Team[] {
    return this.teams;
  }

  getTeamById(id: number): Team | undefined {
    return this.teams.find((team) => team.id == id);
  }

  addTeam(nom: string) {
    let lastId = this.teams.length != 0 ? this.teams[this.teams.length-1].id : 1;
    let team: Team = {id: lastId + 1, nom: nom};
    this.teams.push(team);
  }
}  
