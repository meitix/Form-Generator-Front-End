import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAnswerCreateComponent } from './item-answer-create.component';

describe('ItemAnswerCreateComponent', () => {
  let component: ItemAnswerCreateComponent;
  let fixture: ComponentFixture<ItemAnswerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAnswerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAnswerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
