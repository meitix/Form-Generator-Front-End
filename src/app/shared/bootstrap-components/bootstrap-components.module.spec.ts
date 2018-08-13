import { BootstrapComponentsModule } from './bootstrap-components.module';

describe('BootstrapComponentsModule', () => {
  let bootstrapComponentsModule: BootstrapComponentsModule;

  beforeEach(() => {
    bootstrapComponentsModule = new BootstrapComponentsModule();
  });

  it('should create an instance', () => {
    expect(bootstrapComponentsModule).toBeTruthy();
  });
});
