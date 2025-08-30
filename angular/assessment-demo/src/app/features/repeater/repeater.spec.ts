import { TestBed } from '@angular/core/testing';
import { Repeater } from './repeater';

describe('Repeater', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [Repeater]
    }).compileComponents();

    const fixture = TestBed.createComponent(Repeater);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});


