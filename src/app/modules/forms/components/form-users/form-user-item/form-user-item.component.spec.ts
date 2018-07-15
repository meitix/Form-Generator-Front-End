import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserItemComponent } from './form-user-item.component';

describe('FormUserItemComponent', () => {
  let component: FormUserItemComponent;
  let fixture: ComponentFixture<FormUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
