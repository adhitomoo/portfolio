import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeExperienceComponent} from "../home-experience/home-experience.component";
import {MatIconModule} from "@angular/material/icon";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CommonModule, HomeExperienceComponent, MatIconModule],
  templateUrl: './home-about.component.html',
  styleUrl: './home-about.component.scss',
  animations: [
    trigger("fadeInOut", [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('0.8s', style({ opacity: 1,  transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.8s', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class HomeAboutComponent {

}
