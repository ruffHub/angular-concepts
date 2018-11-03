import { StylingModule } from './styling.module';

describe('StylingModule', () => {
  let stylingModule: StylingModule;

  beforeEach(() => {
    stylingModule = new StylingModule();
  });

  it('should create an instance', () => {
    expect(stylingModule).toBeTruthy();
  });
});
