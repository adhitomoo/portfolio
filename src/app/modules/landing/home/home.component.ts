import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeExperienceComponent} from "./home-experience/home-experience.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',

    encapsulation: ViewEncapsulation.None,
    standalone   : true,
  imports: [MatButtonModule, RouterLink, MatIconModule, HomeExperienceComponent, RouterOutlet],
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
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
