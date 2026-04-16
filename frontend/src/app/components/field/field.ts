import { Component, Input } from '@angular/core';
import { TextField } from '../text-field/text-field';
import { SelectField } from '../select-field/select-field';
import { FieldConfig } from '../../core/models/field';

@Component({
  selector: 'app-field',
  imports: [TextField, SelectField],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class Field {
  @Input({required: true}) field!: FieldConfig;
  @Input() submitted: boolean = false;

  value: any= null;

  onValueChange(value: any): void {
    this.value = value;
  }

  get showError(): boolean {
    return this.submitted && !!this.field.required && !this.value;
  }
}
