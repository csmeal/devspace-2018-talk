import { SessionsPageModule } from './sessions.module';

describe('SessionsModule', () => {
  let sessionsModule: SessionsPageModule;

  beforeEach(() => {
    sessionsModule = new SessionsPageModule();
  });

  it('should create an instance', () => {
    expect(sessionsModule).toBeTruthy();
  });
});
