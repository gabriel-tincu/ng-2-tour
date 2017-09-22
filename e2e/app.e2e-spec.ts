import { AngularRedittPage } from './app.po';

describe('angular-reditt App', () => {
  let page: AngularRedittPage;

  beforeEach(() => {
    page = new AngularRedittPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
