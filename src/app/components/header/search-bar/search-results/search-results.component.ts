import { Component, OnInit, Input } from '@angular/core';
import Person from '../../../../models/person/Person';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
