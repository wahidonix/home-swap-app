import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFirstComponent } from './show-first.component';

describe('ShowFirstComponent', () => {
  let component: ShowFirstComponent;
  let fixture: ComponentFixture<ShowFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFirstComponent]
    });
    fixture = TestBed.createComponent(ShowFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
