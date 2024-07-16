import {Component, forwardRef, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

const FORM_DROPDOWN = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormDropdownComponent),
    multi: true
}
@Component({
  selector: 'app-form-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
  ],
  templateUrl: './form-dropdown.component.html',
  styleUrl: './form-dropdown.component.scss',
  providers: [
    FORM_DROPDOWN,
  ]
})
export class FormDropdownComponent {
  private _items: any[] = [];

  @Input()
  get items() {
    return this._items;
  }
  set items(items: any[]) {
    this._items = items;
  }

  constructor() {
  }
}
