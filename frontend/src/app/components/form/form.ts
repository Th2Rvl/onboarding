import { Component, Input } from '@angular/core';
import { FormRow } from '../form-row/form-row';
import { FormAction } from '../form-actions/form-actions';
import { FormConfig } from '../../core/models/form'

@Component({
  selector: 'app-form',
  imports: [FormRow, FormAction],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  @Input({required: true}) formConfig!: FormConfig;
}