import { Injectable } from '@angular/core';
import { Suggestion } from './suggestion';

@Injectable()
export class SuggestionDataService {

  // last id used so we can increment id's automatically
  lastId: number = 0;

  // Array that stores suggestions
  suggestions: Suggestion[] = [];

  constructor() { }

  addSuggestion(suggestion: Suggestion): SuggestionDataService {
    if (!suggestion.id) {
      suggestion.id = ++this.lastId;
    }
    this.suggestions.push(suggestion);
    return this;
  }

  deleteSuggestionById(id: number): SuggestionDataService {
    this.suggestions = this.suggestions
      .filter(suggestion => suggestion.id != id);
    return this;
  }

  getAllSuggestions(): Suggestion[] {
    return this.suggestions;
  }

  getSuggestionById(id: number): Suggestion {
    return this.suggestions
      .filter(suggestion => suggestion.id === id)
      .pop();
  }

}
