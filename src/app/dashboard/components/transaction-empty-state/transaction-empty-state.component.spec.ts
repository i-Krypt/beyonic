import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEmptyStateComponent } from './transaction-empty-state.component';

describe('TransactionEmptyStateComponent', () => {
  let component: TransactionEmptyStateComponent;
  let fixture: ComponentFixture<TransactionEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionEmptyStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
