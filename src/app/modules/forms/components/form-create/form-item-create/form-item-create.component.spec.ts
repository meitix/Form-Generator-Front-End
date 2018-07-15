import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemCreateComponent } from './form-item-create.component';

describe('FormItemCreateComponent', () => {
  let component: FormItemCreateComponent;
  let fixture: ComponentFixture<FormItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
