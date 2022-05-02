import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import Person from '../models/person/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://localhost:5000/person';

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person> {
    return this.http.get<Person>(this.apiUrl);
  }
}
