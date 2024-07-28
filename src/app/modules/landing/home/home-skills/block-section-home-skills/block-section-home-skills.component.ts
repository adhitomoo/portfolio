import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuseMasonryComponent} from "../../../../../../@fuse/components/masonry";
import {SkillModel} from "../home-skills";
import {animate, style, transition, trigger} from "@angular/animations";
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips'

@Component({
  selector: 'app-block-section-home-skills',
  standalone: true,
  imports: [CommonModule, FuseMasonryComponent, MatChipsModule],
  templateUrl: './block-section-home-skills.component.html',
  styleUrl: './block-section-home-skills.component.scss',
  animations: [
    trigger("fadeInOut", [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        animate('0.8s', style({ opacity: 1,  transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.8s', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class BlockSectionHomeSkillsComponent {
  @Input() skills: SkillModel[];

  isSmallScreen: boolean
  _unsubsribeAll = new Subject();

  constructor(
    private _fuseMediaWatcher: FuseMediaWatcherService
  ) {

    this._fuseMediaWatcher.onMediaChange$.pipe(takeUntil(this._unsubsribeAll)).subscribe(
      (res) => {
        this.isSmallScreen = !res.matchingAliases.includes('sm');
      }
    )

  }

}
