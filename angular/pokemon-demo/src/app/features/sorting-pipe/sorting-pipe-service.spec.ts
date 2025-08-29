import { TestBed } from '@angular/core/testing';
import { SortingPipeService } from './sorting-pipe-service';

describe('SortingPipeService', () => {
  it('should be created', () => {
    TestBed.configureTestingModule({
      providers: [SortingPipeService]
    });

    const service = TestBed.inject(SortingPipeService);
    expect(service).toBeTruthy();
  });
});


