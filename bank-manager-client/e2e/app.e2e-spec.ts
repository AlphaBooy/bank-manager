import { BankManagerClientPage } from './app.po';

describe('bank-manager-client App', function() {
  let page: BankManagerClientPage;

  beforeEach(() => {
    page = new BankManagerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
