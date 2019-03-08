import { TestBed, inject } from '@angular/core/testing';

import { PhraseService } from './test.service';

describe('PhraseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhraseService]
    });
  });

  it('should be created', inject([PhraseService], (service: PhraseService) => {
    expect(service).toBeTruthy();
  }));
});
