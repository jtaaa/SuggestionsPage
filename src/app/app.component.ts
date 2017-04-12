import { Component } from '@angular/core';
import { SuggestionDataService } from './suggestion-data.service';
import { Suggestion } from './suggestion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SuggestionDataService]
})
export class AppComponent {

  title = "Suggestions Page"

  // Where or not a person has failed to enter a name correctly
  failedAuthor: boolean = false;
  // Where or not a person has failed to enter a suggestion correctly
  failedSuggestion: boolean = false;

  authorPlaceholder: string = "Enter your name here!"
  suggestionPlaceholder: string = "Write your suggestion here!"

  newSuggestion: Suggestion = new Suggestion();

  currentAuthorClasses: {};
  setCurrentAuthorClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentAuthorClasses =  {
      'has-error': this.failedAuthor,
      'has-feedback': this.failedAuthor
    };
    this.authorPlaceholder = "Your name is required."
  }
  currentSuggestionClasses: {};
  setCurrentSuggestionClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentSuggestionClasses =  {
      'has-error': this.failedAuthor,
      'has-feedback': this.failedAuthor
    };
    this.suggestionPlaceholder = "A suggestion is required."
  }


  constructor(private suggestionDataService: SuggestionDataService) {
  }

  addSuggestion() {
    if (this.newSuggestion.author != null &&
        this.newSuggestion.suggestion != null) {
      this.suggestionDataService.addSuggestion(this.newSuggestion);
      this.newSuggestion = new Suggestion();
      this.failedAuthor = false;
      this.failedSuggestion = false;
    } else {
      if (this.newSuggestion.author == null) {
        this.failedAuthor = true;
      }
      if (this.newSuggestion.suggestion == null) {
          this.failedSuggestion = true;
      }
    }
    this.setCurrentAuthorClasses();
    this.setCurrentSuggestionClasses();
  }

  removeSuggestions(suggestion) {
    this.suggestionDataService.deleteSuggestionById(suggestion.id);
  }

  get suggestions() {
    return this.suggestionDataService.getAllSuggestions();
  }

}
