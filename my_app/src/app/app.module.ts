import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyInputComponentComponent } from './my-input-component/my-input-component/my-input-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ApiCallServicesComponent } from './api-call-services/api-call-services/api-call-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponentComponent,
    ApiCallServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    HttpClientModule,
  ],
  providers: [ApiCallServicesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
