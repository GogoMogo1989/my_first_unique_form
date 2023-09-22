import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
} from 'rxjs';
import { ApiCallService } from './api-call-services/api-call-service';

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
    private apiCallService: ApiCallService
  ) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nickName: ['', Validators.maxLength(10)],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.autoCompleteDatas$ = this.myForm?.get('email')?.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.apiCallService.getUsersData().pipe(
          map((resp) => {
            return resp.filter((emailData) =>
              emailData.email.toLowerCase().includes(value.toLowerCase())
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
