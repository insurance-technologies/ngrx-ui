import { TestBed } from '@angular/core/testing';

import { NgrxUiLibService } from './ngrx-ui-lib.service';

describe('NgrxUiLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxUiLibService = TestBed.get(NgrxUiLibService);
    expect(service).toBeTruthy();
  });
});
