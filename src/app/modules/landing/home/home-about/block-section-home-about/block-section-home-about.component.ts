import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';

@Component({
  selector: 'app-block-section-home-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-section-home-about.component.html',
  styleUrl: './block-section-home-about.component.scss'
})
export class BlockSectionHomeAboutComponent {
  constructor(
  ) {}

}
