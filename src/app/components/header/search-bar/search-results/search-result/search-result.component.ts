import { Component, OnInit, Input } from '@angular/core';
import PersonKnownFor from 'src/app/models/person/PersonKnownFor';
import PersonKnownForVariant from 'src/app/models/person/PersonKnownForVariant';
import PersonResult from 'src/app/models/person/PersonResult';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() personResult: PersonResult;

  imgBaseUrl: string = "https://image.tmdb.org/t/p/w94_and_h141_bestv2/";
  personMovies: string = "";

  constructor() { }

  ngOnInit(): void {
    this.personMovies = (this.personResult.known_for as Array<PersonKnownFor | PersonKnownForVariant>)
      .map(item => item["name"] || item["original_title"])
      .join(", ");
  }

  onError(event): void {
    event.target.src = "/assets/images/default.jpg";
  }

}
