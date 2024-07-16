import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkingComponent } from './home-working.component';

describe('HomeWorkingComponent', () => {
  let component: HomeWorkingComponent;
  let fixture: ComponentFixture<HomeWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWorkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
