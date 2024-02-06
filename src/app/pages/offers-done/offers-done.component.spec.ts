import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDoneComponent } from './offers-done.component';

describe('OffersDoneComponent', () => {
  let component: OffersDoneComponent;
  let fixture: ComponentFixture<OffersDoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersDoneComponent]
    });
    fixture = TestBed.createComponent(OffersDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
