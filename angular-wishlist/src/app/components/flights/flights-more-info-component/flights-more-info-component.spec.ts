import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsMoreInfoComponent } from './flights-more-info-component';

describe('FlightsMoreInfoComponent', () => {
  let component: FlightsMoreInfoComponent;
  let fixture: ComponentFixture<FlightsMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
