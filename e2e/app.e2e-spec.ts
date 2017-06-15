import { CardappioAdmPage } from './app.po';

describe('cardappio-adm App', () => {
  let page: CardappioAdmPage;

  beforeEach(() => {
    page = new CardappioAdmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
