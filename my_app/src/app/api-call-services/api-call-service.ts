import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private fixedData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
    { id: 6, name: 'Eva Wilson', email: 'eva.wilson@example.com' },
    { id: 7, name: 'David Lee', email: 'david.lee@example.com' },
    { id: 8, name: 'Grace Taylor', email: 'grace.taylor@example.com' },
    { id: 9, name: 'Michael Clark', email: 'michael.clark@example.com' },
    { id: 10, name: 'Olivia Adams', email: 'olivia.adams@example.com' },
    { id: 11, name: 'William Hall', email: 'william.hall@example.com' },
    { id: 12, name: 'Sophia White', email: 'sophia.white@example.com' },
    { id: 13, name: 'James Turner', email: 'james.turner@example.com' },
    { id: 14, name: 'Lily Harris', email: 'lily.harris@example.com' },
    { id: 15, name: 'Benjamin Scott', email: 'benjamin.scott@example.com' },
    { id: 16, name: 'Chloe King', email: 'chloe.king@example.com' },
    { id: 17, name: 'Daniel Evans', email: 'daniel.evans@example.com' },
    { id: 18, name: 'Emma Murphy', email: 'emma.murphy@example.com' },
    { id: 19, name: 'Aiden Miller', email: 'aiden.miller@example.com' },
    { id: 20, name: 'Mia Bennett', email: 'mia.bennett@example.com' },
    { id: 21, name: 'Jackson Parker', email: 'jackson.parker@example.com' },
    { id: 22, name: 'Ava Jenkins', email: 'ava.jenkins@example.com' },
    { id: 23, name: 'Liam Garcia', email: 'liam.garcia@example.com' },
    {
      id: 24,
      name: 'Isabella Martinez',
      email: 'isabella.martinez@example.com',
    },
    { id: 25, name: 'Mason Adams', email: 'mason.adams@example.com' },
    { id: 26, name: 'Sophia White', email: 'sophia.white@example.com' },
    { id: 27, name: 'Ethan Young', email: 'ethan.young@example.com' },
    { id: 28, name: 'Olivia Baker', email: 'olivia.baker@example.com' },
    { id: 29, name: 'Noah Hill', email: 'noah.hill@example.com' },
    { id: 30, name: 'Ava Wright', email: 'ava.wright@example.com' },
  ];

  constructor() {}

  getUsersData(): Observable<any[]> {
    return of(this.fixedData);
  }
}
