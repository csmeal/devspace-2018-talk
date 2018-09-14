import { SpeakersPageModule } from './speakers.module';

describe('SpeakersModule', () => {
  let speakersModule: SpeakersPageModule;

  beforeEach(() => {
    speakersModule = new SpeakersPageModule();
  });

  it('should create an instance', () => {
    expect(speakersModule).toBeTruthy();
  });
});
