import { NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { FuseFullscreenComponent } from '@fuse/components/fullscreen';
import { FuseLoadingBarComponent } from '@fuse/components/loading-bar';
import { FuseHorizontalNavigationComponent, FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
import { LanguagesComponent } from 'app/layout/common/languages/languages.component';
import { MessagesComponent } from 'app/layout/common/messages/messages.component';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { QuickChatComponent } from 'app/layout/common/quick-chat/quick-chat.component';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';
import { UserComponent } from 'app/layout/common/user/user.component';
import { Subject, takeUntil, map } from 'rxjs';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {FormDropdownComponent} from "../../../../shared/forms/form-dropdown/form-dropdown.component";
import {FormTextFieldComponent} from "../../../../shared/forms/form-text-field/form-text-field.component";
import {MenuModel} from "../../../../core/services/menu/menu.model";
import {MENU} from "../../../../core/services/menu/menu.constant";
import { HomeCvComponent } from 'app/modules/landing/home/home-cv/home-cv.component';
import { HomeService } from 'app/modules/landing/home/home.service';

@Component({
  selector: 'minimalist-layout',
  templateUrl  : './minimalist.component.html',
  styleUrls: ['minimalist.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports: [
    FuseLoadingBarComponent,
    NgIf,
    MatAutocompleteModule,
    FuseVerticalNavigationComponent,
    FuseHorizontalNavigationComponent,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    LanguagesComponent,
    FuseFullscreenComponent,
    SearchComponent,
    ShortcutsComponent,
    MessagesComponent,
    NotificationsComponent,
    UserComponent,
    RouterOutlet,
    FormDropdownComponent,
    FormTextFieldComponent,
    RouterLink,
    // QuickChatComponent
  ],
  animations: [
    trigger('entranceLeft', [
      state(
        'normal', style({
          transform: 'translate(0, 0)',
          position: 'relative',
        })
      ),
      state(
        'invisible', style({
          transform: 'translate(0, -200px)',
          position: 'relative',
        })
      ),
      state(
        'visible', style({
          transform: 'translate(0, 0)',
          position: 'fixed',
          top: 30,
          left: 0,
          right: 0,
          margin: 'auto'
        }),
      ),
      transition('invisible => visible', animate('600ms 0.2s ease-in')),
      transition('visible => invisible', animate('600ms 0.2s ease-out'))
    ])
  ],
})
export class MinimalistLayoutComponent implements OnInit, OnDestroy
{

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if(window.scrollY > 200) {
        this.showingNav = 'visible';
        this.scrollClass = 'bg-blue-200'
      }
      if(window.scrollY < 200) {
        this.showingNav = 'invisible';
        this.scrollClass = 'bg-transparent'
      }

      if(window.scrollY < 100) {
        this.showingNav = 'normal'
      }
  }

  private _homeService = inject(HomeService);

  scrollClass: string;
  showingNav: 'invisible' | 'visible' | 'normal';
  isScreenSmall: boolean;
  navigation: Navigation;
  options: string[];
  currentRoute: string;
  public menus: MenuModel[] = MENU;

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _navigationService: NavigationService,
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private _fuseNavigationService: FuseNavigationService,
  )
  {
    this.menus = this.menus.map((menu: MenuModel) => {
      menu.is_active = (this._router.url.includes(menu.label.toLocaleLowerCase()));

      return menu
    })
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for current year
   */
  get currentYear(): number
  {
    return new Date().getFullYear();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
    // Subscribe to navigation data
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: Navigation) =>
      {
        this.navigation = navigation;
      });

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({matchingAliases}) =>
      {
        // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes('md');
        console.log(matchingAliases);
      });
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  public showCV() {
    this._homeService._toggle.next('visible');
  }
  /**
   * Toggle navigation
   *
   * @param name
   */

  onRoute(menu: MenuModel) {
    this._router.navigate([menu.route]);
    menu['is_active'] = true;
  }



  toggleNavigation(name: string): void
  {
    // Get the navigation
    const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

    if ( navigation )
    {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
