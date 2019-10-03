import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyTravelComponent } from './destiny-travel.component';

describe('DestinyTravelComponent', () => {
  let component: DestinyTravelComponent;
  let fixture: ComponentFixture<DestinyTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
