import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedFromViewComponent } from './extended-from-view.component';

describe('ExtendedFromViewComponent', () => {
  let component: ExtendedFromViewComponent;
  let fixture: ComponentFixture<ExtendedFromViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedFromViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedFromViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
