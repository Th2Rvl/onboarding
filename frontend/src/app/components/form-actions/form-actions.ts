import { Component, Input } from '@angular/core';
import { Action } from '../action/action';
import { FormActionsConfig } from '../../core/models/form-actions';

@Component({
  selector: 'app-form-action',
  imports: [Action],
  templateUrl: './form-action.html',
  styleUrl: './form-action.scss',
})
export class FormAction {
  @Input({required: true}) formActionsConfig!: FormActionsConfig;
}