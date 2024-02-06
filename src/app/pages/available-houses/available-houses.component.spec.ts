import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableHousesComponent } from './available-houses.component';

describe('AvailableHousesComponent', () => {
  let component: AvailableHousesComponent;
  let fixture: ComponentFixture<AvailableHousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableHousesComponent]
    });
    fixture = TestBed.createComponent(AvailableHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
