import { TestBed } from '@angular/core/testing';

import { HelloWord } from './hello-word';

describe('HelloWord', () => {
  let service: HelloWord;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloWord);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
