import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHousePageComponent } from './single-house-page.component';

describe('SingleHousePageComponent', () => {
  let component: SingleHousePageComponent;
  let fixture: ComponentFixture<SingleHousePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleHousePageComponent]
    });
    fixture = TestBed.createComponent(SingleHousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
