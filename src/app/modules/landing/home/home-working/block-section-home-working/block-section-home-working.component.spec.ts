import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSectionHomeWorkingComponent } from './block-section-home-working.component';

describe('BlockSectionHomeWorkingComponent', () => {
  let component: BlockSectionHomeWorkingComponent;
  let fixture: ComponentFixture<BlockSectionHomeWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSectionHomeWorkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockSectionHomeWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
