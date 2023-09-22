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
      email: ['', Validators.required],
      startDate: [Date, Validators.required],
      endDate: [Date, Validators.required],
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

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${
      day < 10 ? '0' : ''
    }${day}`;
  }

  saveForm() {
    if (this.myForm?.valid) {
      const startDateValue = this.myForm.get('startDate')?.value;
      const endDateValue = this.myForm.get('endDate')?.value;

      if (startDateValue && endDateValue) {
        const startDate = new Date(startDateValue);
        const endDate = new Date(endDateValue);

        const formattedStartDate = this.formatDate(startDate);
        const formattedEndDate = this.formatDate(endDate);

        this.myForm.get('startDate')?.setValue(formattedStartDate);
        this.myForm.get('endDate')?.setValue(formattedEndDate);

        this.showSavedValues = true;
      }
    }
  }
}
