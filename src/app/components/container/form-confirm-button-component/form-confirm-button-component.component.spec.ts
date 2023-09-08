import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmButtonComponentComponent } from './form-confirm-button-component.component';

describe('FormConfirmButtonComponentComponent', () => {
  let component: FormConfirmButtonComponentComponent;
  let fixture: ComponentFixture<FormConfirmButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormConfirmButtonComponentComponent]
    });
    fixture = TestBed.createComponent(FormConfirmButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
