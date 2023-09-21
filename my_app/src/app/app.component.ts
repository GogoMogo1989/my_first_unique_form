import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinct,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from 'rxjs';
import { ApiCallServicesComponent } from './api-call-services/api-call-services/api-call-services.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup | undefined;
  showSavedValues: boolean = false;
  autoCompleteDatas$: Observable<any> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private apiCallServicesComponent: ApiCallServicesComponent
  ) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.maxLength(10)],
      name: [''],
    });
  }

  ngOnInit(): void {
    this.autoCompleteDatas$ = this.myForm?.get('name')?.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.apiCallServicesComponent.getUsersData().pipe(
          map((resp) => {
            return resp.filter((nameData) =>
              nameData.first_name.toLowerCase().includes(value.toLowerCase())
            );
          })
        );
      })
    );
  }

  saveForm() {
    if (this.myForm?.valid) {
      this.showSavedValues = true;
    }
  }
}
