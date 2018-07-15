import { TestBed, inject } from '@angular/core/testing';

import { QuestionOptionService } from './question-option.service';

describe('QuestionOptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionOptionService]
    });
  });

  it('should be created', inject([QuestionOptionService], (service: QuestionOptionService) => {
    expect(service).toBeTruthy();
  }));
});
