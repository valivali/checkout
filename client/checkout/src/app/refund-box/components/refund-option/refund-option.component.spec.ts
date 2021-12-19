import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundOptionComponent } from './refund-option.component';

describe('RefundOptionComponent', () => {
  let component: RefundOptionComponent;
  let fixture: ComponentFixture<RefundOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
