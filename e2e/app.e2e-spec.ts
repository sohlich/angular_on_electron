import { ElectronPage } from './app.po';

describe('electron App', () => {
  let page: ElectronPage;

  beforeEach(() => {
    page = new ElectronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
