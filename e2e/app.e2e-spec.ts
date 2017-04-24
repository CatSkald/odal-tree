import { OdalTreePage } from './app.po';

describe('odal-tree App', () => {
  let page: OdalTreePage;

  beforeEach(() => {
    page = new OdalTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
