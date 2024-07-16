import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListWorkingModel} from "../home-working";

@Component({
  selector: 'app-block-section-home-working',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-section-home-working.component.html',
  styleUrl: './block-section-home-working.component.scss'
})
export class BlockSectionHomeWorkingComponent {
  @Input() listBlock: ListWorkingModel[];

  constructor() {
  }

}
