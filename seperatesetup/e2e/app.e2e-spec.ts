import { SeperatesetupPage } from './app.po';

describe('seperatesetup App', function() {
  let page: SeperatesetupPage;

  beforeEach(() => {
    page = new SeperatesetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
