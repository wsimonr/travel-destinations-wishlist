import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDestinyTravelComponent } from './form-destiny-travel.component';

describe('FormDestinyTravelComponent', () => {
  let component: FormDestinyTravelComponent;
  let fixture: ComponentFixture<FormDestinyTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDestinyTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDestinyTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
