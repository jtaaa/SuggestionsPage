import { SuggestionsAppPage } from './app.po';

describe('suggestions-app App', () => {
  let page: SuggestionsAppPage;

  beforeEach(() => {
    page = new SuggestionsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
