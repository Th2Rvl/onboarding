import { Component, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { TeamsApiService } from '../../services/api/teams-api';
import { FormConfig } from '../../core/models/form';
import { Team } from '../../core/models/team';
import { Router } from '@angular/router';
import { Tab } from 'primeng/tabs';
import { Table, TableRowSelectEvent } from 'primeng/table';
import { Form } from '../../components/form/form';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-teams',
  imports: [Form, TableModule],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
})

export class Teams {
  
  private teamsApi = inject(TeamsApiService);
  private routeur = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  teams: Team[] = [];

  ngOnInit(): void {
    this.teamsApi.getTeams().subscribe(teams => {
      this.teams = teams;
      this.cdr.markForCheck();
    })
  }

  formConfig: FormConfig = {
    title: 'Ajouter une équipe',
    rows: [{fields: [{ key: 'nom', type: 'text', label: 'Nom', required: true }]}],
    actions: {
      actions: [
        {
          label: 'Ajouter',
          severity: 'primary',
          icon: 'pi pi-plus',
          command: () => {} 
        }
      ]
    }
  };

  addTeam(values: Record<string, any>): void {
    this.teamsApi.createTeam(values['nom']).subscribe(team => {
      this.teams = [...this.teams, team];
      this.cdr.markForCheck();
    });      
  }

  /**
   * Permet d’aller automatiquement sur la page des membres de l’équipe choisie, sans recharger la page, en utilisant la navigation Angular.
   */
  onRowSelect(event: TableRowSelectEvent): void {
    const team: Team = event.data;
    this.routeur.navigate(['/teams', team.id, 'membres']);
  }
}