import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'myInput',
  templateUrl: './my-input-component.component.html',
  styleUrls: ['./my-input-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponentComponent),
      multi: true,
    },
  ],
})
export class MyInputComponentComponent implements ControlValueAccessor {
  @Input() value: string = '';
  @Input() placeholder: string = '';

  onChange: any = () => {};

  writeValue(value: any): void {
    //érték beállítása, a saját komponensében külső adatforrásból.(Itt a Formcontrol)
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    //ez a metódus felel ha változik az érték az űrlap elem input mezőjében
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    //Itt meg az interakcióért felel ez a metódus
  }

  updateValue() {
    this.onChange(this.value);
  }

  clearInput() {
    this.value = '';
    this.onChange(this.value);
  }
}
