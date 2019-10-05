import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyDetailComponent } from './destiny-detail.component';

describe('DestinyDetailComponent', () => {
  let component: DestinyDetailComponent;
  let fixture: ComponentFixture<DestinyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
