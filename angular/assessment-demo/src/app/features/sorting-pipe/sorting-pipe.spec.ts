import { TestBed } from '@angular/core/testing';
import { SortingPipe } from './sorting-pipe';

describe('SortingPipe', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [SortingPipe]
    }).compileComponents();

    const fixture = TestBed.createComponent(SortingPipe);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


