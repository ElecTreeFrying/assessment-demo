import { TestBed } from '@angular/core/testing';
import { RepeaterService } from './repeater-service';

describe('RepeaterService', () => {
  it('should be created', () => {
    TestBed.configureTestingModule({
      providers: [RepeaterService]
    });

    const service = TestBed.inject(RepeaterService);
    expect(service).toBeTruthy();
  });
});


