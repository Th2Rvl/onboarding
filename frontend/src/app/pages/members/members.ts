import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Form } from '../../components/form/form';
import { Member } from '../../core/models/member';
import { FormConfig } from '../../core/models/form';
import { email } from '@angular/forms/signals';
import { Members as MembersService } from '../../services/members'
import { TableModule } from 'primeng/table';
import { RoleSeverityPipe } from '../../shared/pipes/role-severity-pipe';
import { TagModule } from 'primeng/tag';
import { value } from '@primeuix/themes/aura/knob';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Teams } from '../../services/teams'
import { Team } from '../../core/models/team';
import { MembersApi } from '../../services/api/members-api';

@Component({
  selector: 'app-members',
  imports: [Form, TableModule, TagModule, RoleSeverityPipe, Button, RouterLink],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})

export class Members implements OnInit {

    protected teamId: number = 0;
    protected team: Team | undefined = undefined;
    protected members: Member[] = [];
    
    private cdr = inject(ChangeDetectorRef);
    private memberService = inject(MembersService);
    private memberApi = inject(MembersApi);
    private teamService = inject(Teams);
    
    // Récupération du teamId saisie dans la route
    constructor(private route:ActivatedRoute) {} // Injection du service ActivateRoute
    ngOnInit(): void { // Récupération du paramètre au démarage du composant
        const idParam = this.route.snapshot.paramMap.get('teamId');

        if (idParam !== null) {
            this.teamId = Number(idParam);
            this.members = this.memberService.getMembersByTeam(this.teamId);
            this.team = this.teamService.getTeamById(this.teamId);
        }
    }
    
    

    formConfig: FormConfig = {
        title: 'Ajouter un membre',
        rows: [
            {
                fields: [
                    { key: 'nom', type: 'text', label: 'Nom', required: true },
                    { key: 'prenom', type: 'text', label: 'Prénom', required: true }
                ]
            },
            {
                fields: [
                    { key: 'email', type: 'text', label: 'Email', required: true }
                ]
            },
            {
                fields: [
                    {
                        key: 'role',
                        type: 'select',
                        label: 'Statut',
                        options: ['membre', 'admin'],
                        default: 'membre'
                    }
                ]
            }
        ],
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

    addMember(values: Record<string, any>): void {
        // TODO: récupérer les valeurs du formulaire et ajouter le membre
        const member = {
            nom: values['nom'],
            prenom: values['prenom'],
            email: values['email'],
            role: values['role'] ?? 'membre',
            teamId: this.teamId
        };

        this.memberApi.createMember(this.teamId, member).subscribe(member => {
            this.members = [...this.members, member];
            this.cdr.markForCheck();
        });
    }
}
