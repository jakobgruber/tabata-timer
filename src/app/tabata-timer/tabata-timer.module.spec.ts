import { TabataTimerModule } from './tabata-timer.module';

describe('TabataTimerModule', () => {
  let tabataTimerModule: TabataTimerModule;

  beforeEach(() => {
    tabataTimerModule = new TabataTimerModule();
  });

  it('should create an instance', () => {
    expect(tabataTimerModule).toBeTruthy();
  });
});
