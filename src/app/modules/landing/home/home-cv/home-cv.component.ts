import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit, Inject, inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Subject, takeUntil, filter } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { LandingHomeComponent } from '../home.component';
import { HomeExperienceComponent } from '../home-experience/home-experience.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-cv',
  templateUrl: './home-cv.component.html',
  styleUrls: ['./home-cv.component.scss'],
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, MatIconModule],
  providers: [
    HomeExperienceComponent
  ],
  animations: [
    trigger('entranceLeft', [
      state(
        'invisible', style({
          transform: 'translate(1000px, 0) scale(0)',
          opacity: 0
        })
      ),
      state(
        'visible', style({
          transform: 'translate(0, 0) scale(1)',
          opacity: 1
        })
      ),
      transition('invisible => visible', animate('600ms 0.25s ease-in')),
      transition('visible => invisible', animate('600ms 0.25s ease-out'))
    ])
  ],
})
export class HomeCvComponent implements OnInit, AfterViewInit {

  @ViewChild('tagsPanelOrigin') private _tagsPanelOrigin: ElementRef;
  @ViewChild('tagsPanel') private _tagsPanel: TemplateRef<any>;

  public _homeService = inject(HomeService);


  public animationState: 'visible' | 'invisible' = 'invisible';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  private _viewContainerRef: ViewContainerRef
  private _tagsPanelOverlayRef: OverlayRef;

  public experiences: any[];

  constructor(
    private _overlay: Overlay,
    private _experience: HomeExperienceComponent
    // private _homeComponent: LandingHomeComponent
  ) { }

  ngOnInit() {
    this.experiences = this._experience.experiences.map((exp: any) => {
      switch (exp.title) {
        case "Esoftdream":
          exp.place = 'Yogyakarta';
          exp.description = [
            'Create a web builder that automatically generates landing pages or company profiles using WordPress, and an admin page using Vue.js.',
            'Create company profile static using Html, Scss, javascript',
            'Create a marketplace website for the buying and selling of gold and silver with real-time gold price data. The technology used is Nuxt.js and midtrans for payment'
          ];
          break;

        case "Badan Sistem Informasi (UII)":
          exp.place = 'Yogyakarta';
          exp.description = [
            'Create an application for employee management and organization within the UII environment using angular and nest js',
            'Contribute to create reusable form component in team',
            'Develope a web recruitment application for hiring new employees at Universitas Islam Indonesia'
          ];
          break;

        case "Multipolar":
          exp.place = 'Jakarta';
          exp.description = [
            'Create web apps for Bank to create, manage and monitoring virtual account payment using Nuxt Js'
          ];
          break;

        case "Gaji.id":
          exp.place = 'Jakarta';
          exp.description = [
            'Created reusable components in the Angular framework to simplify and expedite development processes. ',
            'Updated Angular version and contributed to resolving various bugs.'
          ];
          break;

        default:
          break;
      }

      return exp;
    });

    this._homeService.toggle$.pipe(takeUntil(this._unsubscribeAll)).subscribe((res: 'invisible' | 'visible') => {
      this.animationState = res;
    })
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

    // Dispose the overlay
    if ( this._tagsPanelOverlayRef )
    {
      this._tagsPanelOverlayRef.dispose();
    }
  }

  public showModal():void {

  }

  public closeModal(): void {
    this._homeService._toggle.next('invisible');
    this.animationState = 'invisible'
  }

  openTagsPanel(): void
  {
    // Create the overlay
    this._tagsPanelOverlayRef = this._overlay.create({
      backdropClass   : '',
      hasBackdrop     : true,
      scrollStrategy  : this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position()
        .flexibleConnectedTo(this._tagsPanelOrigin.nativeElement)
        .withFlexibleDimensions(true)
        .withViewportMargin(64)
        .withLockedPosition(true)
        .withPositions([
          {
            originX : 'start',
            originY : 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
        ]),
    });

    // Subscribe to the attachments observable
    this._tagsPanelOverlayRef.attachments().subscribe(() =>
    {
      // Focus to the search input once the overlay has been attached
      this._tagsPanelOverlayRef.overlayElement.querySelector('input').focus();
    });

    // Create a portal from the template
    const templatePortal = new TemplatePortal(this._tagsPanel, this._viewContainerRef);

    // Attach the portal to the overlay
    this._tagsPanelOverlayRef.attach(templatePortal);

    // Subscribe to the backdrop click
    this._tagsPanelOverlayRef.backdropClick().subscribe(() =>
    {
      // If overlay exists and attached...
      if ( this._tagsPanelOverlayRef && this._tagsPanelOverlayRef.hasAttached() )
      {
        // Detach it
        this._tagsPanelOverlayRef.detach();

        // Reset the tag filter
        // this.filteredTags = this.tags;

        // Toggle the edit mode off
        // this.tagsEditMode = false;
      }

      // If template portal exists and attached...
      if ( templatePortal && templatePortal.isAttached )
      {
        // Detach it
        templatePortal.detach();
      }
    });
  }

}
