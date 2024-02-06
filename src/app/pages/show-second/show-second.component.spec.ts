import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSecondComponent } from './show-second.component';

describe('ShowSecondComponent', () => {
  let component: ShowSecondComponent;
  let fixture: ComponentFixture<ShowSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSecondComponent]
    });
    fixture = TestBed.createComponent(ShowSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
