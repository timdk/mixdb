import { MixdbPage } from './app.po';

describe('mixdb App', function() {
  let page: MixdbPage;

  beforeEach(() => {
    page = new MixdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
