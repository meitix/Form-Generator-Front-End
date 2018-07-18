import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChartsComponent } from './form-charts.component';

describe('FormChartsComponent', () => {
  let component: FormChartsComponent;
  let fixture: ComponentFixture<FormChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
