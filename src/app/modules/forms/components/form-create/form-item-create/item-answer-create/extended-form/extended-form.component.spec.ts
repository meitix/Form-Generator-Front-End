import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFormComponent } from './extended-form.component';

describe('ExtendedFormComponent', () => {
  let component: ExtendedFormComponent;
  let fixture: ComponentFixture<ExtendedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
