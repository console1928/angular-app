import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import Person from '../../../models/person/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild("input") input: ElementRef;
  @ViewChild("searchResults") searchResults: ElementRef;

  person: Person | {} = {};
  searchResultsIsShowing: boolean = false;

  constructor(private personService: PersonService, private renderer: Renderer2) {
    this.renderer.listen("window", "click", (event: Event)=>{
      if (event.target !== this.input.nativeElement && event.target !== this.searchResults.nativeElement) {
        this.searchResultsIsShowing = false;
      }
    });
  }

  ngOnInit(): void {}

  onFocus(): void {
    this.searchResultsIsShowing = true;
  }

  onInputChange(searchValue: string): void {
    if (searchValue) {
      this.personService.getPerson(searchValue).subscribe((person) => this.person = person);
    }
  }

}
