import { DroneLogPage } from './app.po';

describe('drone-log App', () => {
  let page: DroneLogPage;

  beforeEach(() => {
    page = new DroneLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
