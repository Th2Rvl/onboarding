import { Component, inject } from '@angular/core';
import { Form } from '../../components/form/form';
import { Member } from '../../core/models/member';
import { FormConfig } from '../../core/models/form';
import { email } from '@angular/forms/signals';
import { Members as MembersService } from '../../services/members'
import { TableModule } from 'primeng/table';
import { RoleSeverityPipe } from '../../shared/pipes/role-severity-pipe';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-members',
  imports: [Form, TableModule, TagModule, RoleSeverityPipe],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members {
    private memberService = inject(MembersService);
    members: Member[] = [];

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
        const member: Member = {
            nom: values['nom'],
            prenom: values['prenom'],
            email: values['email'],
            role: values['role'] ?? 'membre',
        };
        this.memberService.addMember(member);
    }
}
