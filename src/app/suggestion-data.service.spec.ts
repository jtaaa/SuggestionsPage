import { TestBed, inject } from '@angular/core/testing';
import { Suggestion } from './suggestion';
import { SuggestionDataService } from './suggestion-data.service';

describe('SuggestionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionDataService]
    });
  });

  it('should ...', inject([SuggestionDataService], (service: SuggestionDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#addSuggestion(suggestion)', () => {

    it('should automatically assign an incrementing id', inject([SuggestionDataService], (service: SuggestionDataService) => {
      let suggestion1 = new Suggestion({
        author: 'Kern Chase',
        suggestion: 'Play more dancehall'
      });
      let suggestion2 = new Suggestion({
        author: 'Adam Campbell',
        suggestion: 'Hire better DJ'
      });
      service.addSuggestion(suggestion1);
      service.addSuggestion(suggestion2);
      expect(service.getSuggestionById(1)).toEqual(suggestion1);
      expect(service.getSuggestionById(2)).toEqual(suggestion2);
    }));
  });

  describe('#getAllSuggestions()', () => {

    it('should return an empty array by default', inject([SuggestionDataService], (service: SuggestionDataService) => {
      expect(service.getAllSuggestions()).toEqual([]);
    }));

    it('should return an array of all suggestions', inject([SuggestionDataService], (service: SuggestionDataService) => {
      let suggestion1 = new Suggestion({
        author: 'Kern Chase',
        suggestion: 'Play more dancehall'
      });
      let suggestion2 = new Suggestion({
        author: 'Adam Campbell',
        suggestion: 'Hire better DJ'
      });
      service.addSuggestion(suggestion1);
      service.addSuggestion(suggestion2);
      expect(service.getAllSuggestions()).toEqual([suggestion1, suggestion2]);
    }));
  });

  describe('#deleteSuggestionById(id)', () => {

    it('should remove suggestion with corresponding id', inject([SuggestionDataService], (service: SuggestionDataService) => {
      let suggestion1 = new Suggestion({
        author: 'Kern Chase',
        suggestion: 'Play more dancehall'
      });
      let suggestion2 = new Suggestion({
        author: 'Adam Campbell',
        suggestion: 'Hire better DJ'
      });
      service.addSuggestion(suggestion1);
      service.addSuggestion(suggestion2);
      expect(service.getAllSuggestions()).toEqual([suggestion1, suggestion2]);
      service.deleteSuggestionById(1);
      expect(service.getAllSuggestions()).toEqual([suggestion2]);
      service.deleteSuggestionById(2);
      expect(service.getAllSuggestions()).toEqual([]);
    }));

    it('should do nothing if suggestion with corresponding id is not found', inject([SuggestionDataService], (service: SuggestionDataService) => {
      let suggestion1 = new Suggestion({
        author: 'Kern Chase',
        suggestion: 'Play more dancehall'
      });
      let suggestion2 = new Suggestion({
        author: 'Adam Campbell',
        suggestion: 'Hire better DJ'
      });
      service.addSuggestion(suggestion1);
      service.addSuggestion(suggestion2);
      service.deleteSuggestionById(3);
      expect(service.getAllSuggestions()).toEqual([suggestion1, suggestion2]);
    }));
  });

  describe('#getSuggestionById(id)', () => {

    it('should return a suggestion corresponding to id', inject([SuggestionDataService], (service: SuggestionDataService) => {
      let suggestion1 = new Suggestion({
        author: 'Kern Chase',
        suggestion: 'Play more dancehall'
      });
      let suggestion2 = new Suggestion({
        author: 'Adam Campbell',
        suggestion: 'Hire better DJ'
      });
      service.addSuggestion(suggestion1);
      service.addSuggestion(suggestion2);
      expect(service.getSuggestionById(1)).toEqual(suggestion1);
      expect(service.getSuggestionById(2)).toEqual(suggestion2);
    }));
  });
  
});
