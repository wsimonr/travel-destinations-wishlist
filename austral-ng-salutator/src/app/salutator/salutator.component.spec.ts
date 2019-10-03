import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalutatorComponent } from './salutator.component';

describe('SalutatorComponent', () => {
  let component: SalutatorComponent;
  let fixture: ComponentFixture<SalutatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalutatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalutatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
