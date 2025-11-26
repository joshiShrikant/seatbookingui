import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMySeat } from './book-my-seat';

describe('BookMySeat', () => {
  let component: BookMySeat;
  let fixture: ComponentFixture<BookMySeat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookMySeat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMySeat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
