import Application from '../src/app/application';

describe('application.ts', () => {
  let application: Application;

  beforeAll(() => {
    application = new Application();
  });

  it('application should be defined', () => {
    expect(application).toBeDefined();
  });
});
