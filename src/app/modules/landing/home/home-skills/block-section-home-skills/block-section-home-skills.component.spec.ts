import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSectionHomeSkillsComponent } from './block-section-home-skills.component';

describe('BlockSectionHomeSkillsComponent', () => {
  let component: BlockSectionHomeSkillsComponent;
  let fixture: ComponentFixture<BlockSectionHomeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSectionHomeSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockSectionHomeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
