import { Component } from '@angular/core';

@Component({
  selector: 'my-input-component',
  templateUrl: './my-input-component.component.html',
  styleUrls: ['./my-input-component.component.scss'],
})
export class MyInputComponentComponent {
  inputValue: string = '';

  onInputChange() {}

  clearInput() {
    this.inputValue = '';
  }
}
