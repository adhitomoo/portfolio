import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextFieldComponent } from './form-text-field.component';

describe('FormTextFieldComponent', () => {
  let component: FormTextFieldComponent;
  let fixture: ComponentFixture<FormTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTextFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
