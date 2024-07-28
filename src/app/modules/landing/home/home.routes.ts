import { Routes } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import {HomeWorkingComponent} from "./home-working/home-working.component";
import {HomeAboutComponent} from "./home-about/home-about.component";
import {HomeExperienceComponent} from "./home-experience/home-experience.component";
import {HomeSkillsComponent} from "./home-skills/home-skills.component";
import { HomeCvComponent } from './home-cv/home-cv.component';

export default [
  {
    path: '',
    component: LandingHomeComponent,
    children: [
      {
        path: 'about',
        component: HomeAboutComponent
      },
      {
        path: 'portfolio',
        component: HomeWorkingComponent
      },
      {
        path: 'skills',
        component: HomeSkillsComponent
      },
      {
        path: 'experience',
        component: HomeExperienceComponent
      },
      {
        path: 'cv',
        component: HomeCvComponent
      }
    ]
  },
] as Routes;
