import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderviewbookComponent } from './readerviewbook.component';

describe('ReaderviewbookComponent', () => {
  let component: ReaderviewbookComponent;
  let fixture: ComponentFixture<ReaderviewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderviewbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderviewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
