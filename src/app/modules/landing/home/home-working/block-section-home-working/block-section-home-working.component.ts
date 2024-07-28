import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListWorkingModel} from "../home-working";
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-block-section-home-working',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-section-home-working.component.html',
  styleUrl: './block-section-home-working.component.scss'
})
export class BlockSectionHomeWorkingComponent implements OnInit, OnDestroy {
  @Input() listBlock: ListWorkingModel[];

  isSmallScreen: boolean = false;

  private _unsubscribeAll = new Subject();

  constructor(
    private _fuseWatcherService: FuseMediaWatcherService
  ) {

  }

  ngOnInit(): void {
    this._fuseWatcherService?.onMediaChange$.subscribe(
      (res) => {
        this.isSmallScreen = !res.matchingAliases.includes('sm');
      }
    )
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete;
  }

}
