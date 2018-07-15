import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiOptionsCreateComponent } from './multi-options-create.component';

describe('MultiOptionsCreateComponent', () => {
  let component: MultiOptionsCreateComponent;
  let fixture: ComponentFixture<MultiOptionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiOptionsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiOptionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
