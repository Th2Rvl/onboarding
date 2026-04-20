import { Component, inject } from '@angular/core';
import { Teams as TeamsService } from '../../services/teams'
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
  private teamService = inject(TeamsService);
  private routeur = inject(Router);
  teams: Team[] = this.teamService.getTeams();

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

  addTeam(values: string): void {
    this.teamService.addTeam(values);      
  }

  /**
   * Permet d’aller automatiquement sur la page des membres de l’équipe choisie, sans recharger la page, en utilisant la navigation Angular.
   */
  onRowSelect(event: TableRowSelectEvent): void {
    const team: Team = event.data;
    this.routeur.navigate(['/teams', team.id, 'membres']);
  }
}
