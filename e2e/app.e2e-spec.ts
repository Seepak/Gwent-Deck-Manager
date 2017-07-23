import { GwentDeckManagerPage } from './app.po';

describe('gwent-deck-manager App', () => {
  let page: GwentDeckManagerPage;

  beforeEach(() => {
    page = new GwentDeckManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
