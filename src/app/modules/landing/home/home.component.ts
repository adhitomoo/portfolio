import { Component, ViewEncapsulation, ViewChild, Inject, ChangeDetectorRef, OnInit, inject, AfterViewInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {HomeExperienceComponent} from "./home-experience/home-experience.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { HomeCvComponent } from "./home-cv/home-cv.component";
import { HomeService } from './home.service';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',

    encapsulation: ViewEncapsulation.None,
    standalone   : true,
  imports: [MatButtonModule, RouterLink, MatIconModule, HomeExperienceComponent, RouterOutlet, MatSidenavModule, HomeCvComponent],
    animations   : [
      trigger('entrance', [
        state(
          'invisible', style({
            transform: 'translate(0, -150px) scale(1)',
            opacity: 0
          })
        ),
        state(
          'visible', style({
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
          })
        ),
        transition('invisible => visible', animate('0.8s ease-in')),
        transition('visible => invisible', animate('0.8s ease-out'))
      ])
    ]
})
export class LandingHomeComponent implements OnInit, AfterViewInit
{
  @ViewChild('matDrawer', {static: true}) matDrawer: MatDrawer;

  public _homeService = inject(HomeService);

  private _fuseMediaWatcherService = inject(FuseMediaWatcherService)
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  drawerMode: 'side' | 'over';
    /**
     * Constructor
     */
    constructor(
      private _router: Router,
      private _activatedRoute: ActivatedRoute,
      private _changeDetectorRef: ChangeDetectorRef
    )

    {
    }

    ngOnInit(): void {
      this._fuseMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)')
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((state) =>
      {
        // Calculate the drawer mode
        this.drawerMode = state.matches ? 'side' : 'over';

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
    }

    ngAfterViewInit(): void {
      if(this.matDrawer) {
        console.log(this.matDrawer);
      }
    }

    ngOnDestroy(): void
    {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
    }

    onBackdropClicked(): void
    {
      // Go back to the list
      this._router.navigate(['./'], {relativeTo: this._activatedRoute});

      // Mark for check
      this._changeDetectorRef.markForCheck();
    }
}
