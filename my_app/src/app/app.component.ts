import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;
  showSavedValues: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      nickName: [''],
    });
  }

  saveForm() {
    console.log(this.myForm.value);
    this.showSavedValues = true;
  }
}
