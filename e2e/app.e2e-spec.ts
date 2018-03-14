import { Angular5CRUDPage } from './app.po';

describe('angular5-crud App', function() {
  let page: Angular5CRUDPage;

  beforeEach(() => {
    page = new Angular5CRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
