import {Suggestion} from './suggestion';

describe('Suggestion', () => {
  it('should create an instance', () => {
    expect(new Suggestion()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let suggestion = new Suggestion({
      id: 1,
      author: 'Dari Maharaj OG',
      suggestion: 'Import Machel for a party!'
    });
    expect(suggestion.id).toEqual(1);
    expect(suggestion.author).toEqual('Dari Maharaj OG');
    expect(suggestion.suggestion).toEqual('Import Machel for a party!');
  });
});
