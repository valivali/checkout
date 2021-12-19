import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundBoxComponent } from './refund-box.component';

describe('RefundBoxComponent', () => {
  let component: RefundBoxComponent;
  let fixture: ComponentFixture<RefundBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
