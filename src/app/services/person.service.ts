import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import Person from '../models/person/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private searchUrl = '/search';

  constructor(private http: HttpClient) { }

  getPerson(searchValue: string): Observable<Person> {
    return this.http.get<Person>(`${this.searchUrl}?query=${searchValue}`);
  }
}
