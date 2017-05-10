import { TestBed, inject } from '@angular/core/testing';

import { TreeProviderService } from './tree-provider.service';

describe('TreeProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeProviderService]
    });
  });

  it('should ...', inject([TreeProviderService], (service: TreeProviderService) => {
    expect(service).toBeTruthy();
  }));
});
