import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallServicesComponent } from './api-call-services.component';

describe('ApiCallServicesComponent', () => {
  let component: ApiCallServicesComponent;
  let fixture: ComponentFixture<ApiCallServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallServicesComponent]
    });
    fixture = TestBed.createComponent(ApiCallServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
