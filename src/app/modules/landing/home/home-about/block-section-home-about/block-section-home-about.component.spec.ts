import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSectionHomeAboutComponent } from './block-section-home-about.component';

describe('BlockSectionHomeAboutComponent', () => {
  let component: BlockSectionHomeAboutComponent;
  let fixture: ComponentFixture<BlockSectionHomeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSectionHomeAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockSectionHomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
