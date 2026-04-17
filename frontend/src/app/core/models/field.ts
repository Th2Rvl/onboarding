import { required } from "@angular/forms/signals";

export type FieldType = 'text' | 'select';

export interface FieldConfig {
    key: string;
    label?: string;
    type: FieldType;
    options?: any[];  // uniquement pour le type 'select'
    default?: any;    // valeur par défaut du champ
    required?: boolean; // indique si le champ est obligatoire
}