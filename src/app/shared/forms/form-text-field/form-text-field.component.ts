import {Component, forwardRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

const FORM_TEXT_FIELD = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormTextFieldComponent),
  multi: true
}

@Component({
  selector: 'app-form-text-field',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './form-text-field.component.html',
  styleUrl: './form-text-field.component.scss'
})
export class FormTextFieldComponent {
  @Input() label: string;

}
