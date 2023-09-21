import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-call-services',
  templateUrl: './api-call-services.component.html',
  styleUrls: ['./api-call-services.component.scss'],
})
export class ApiCallServicesComponent {
  private apiUrl = 'https://random-data-api.com/api/v2/users?size=20&is';

  constructor(private http: HttpClient) {}

  getUsersData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
