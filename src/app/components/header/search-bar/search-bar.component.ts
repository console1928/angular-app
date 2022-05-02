import { Component, OnInit } from '@angular/core';
import Person from '../../../models/person/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  person: Person | {} = {};
  searchResultsIsShowing: boolean = false;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {}

  onFocus(): void {
    this.searchResultsIsShowing = true;
  }

  onBlur(): void {
    this.searchResultsIsShowing = false;
  }

  onInputChange(searchValue: string): void {
    if (searchValue) {
      this.personService.getPerson().subscribe((person) => this.person = person);
    }
  }

}
