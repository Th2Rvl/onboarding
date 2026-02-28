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

  value: any= null;

  onValueChange(value: any) {
    this.value = value;
  }
}
