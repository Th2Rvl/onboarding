import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '../action/action';
import { FormActionsConfig } from '../../core/models/form-actions';

@Component({
  selector: 'app-form-actions',
  imports: [Action],
  templateUrl: './form-actions.html',
  styleUrl: './form-actions.scss',
})
export class FormActions {
  @Input({required: true}) config!: FormActionsConfig;
  @Output() actionClick = new EventEmitter<void>();

  onAction(): void {
    this.actionClick.emit();
  }
}