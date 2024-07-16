import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BlockSectionHomeWorkingComponent
} from "../home-working/block-section-home-working/block-section-home-working.component";
import {animate, style, transition, trigger} from "@angular/animations";
import {FuseMasonryComponent} from "../../../../../@fuse/components/masonry";
import {BlockSectionHomeSkillsComponent} from "./block-section-home-skills/block-section-home-skills.component";
import {SkillModel} from "./home-skills";

@Component({
  selector: 'app-home-skills',
  standalone: true,
  imports: [CommonModule, BlockSectionHomeWorkingComponent, FuseMasonryComponent, BlockSectionHomeSkillsComponent],
  templateUrl: './home-skills.component.html',
  styleUrl: './home-skills.component.scss',
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
export class HomeSkillsComponent {
  public skills: SkillModel[];
  public soft_skills: SkillModel[];

  constructor() {
    this.skills = [
      {
        name: 'TypeScript',
        description: 'TypeScript is a robust, statically typed superset of JavaScript that enhances code quality, maintainability, and developer productivity',
        icon: 'typescript_icon.svg',
        type: 'core'
      },
      {
        name: 'SASS',
        description: 'Sass is a powerful tool for writing CSS that improves the maintainability, readability, and reusability of your stylesheets. Its advanced features like variables, nesting, mixins, and functions make it an essential tool for modern web development',
        icon: 'sass_icon.svg',
        type: 'core'

      },
      {
        name: 'Angular',
        description: 'Angular is a comprehensive framework for building dynamic, single-page web applications. Its component-based architecture, powerful tools, and strong community support make it an excellent choice for developing scalable and maintainable web applications.',
        icon: 'angular_icon.svg',
        type: 'core'

      },
      {
        name: 'Next JS',
        description: 'Next.js is a powerful framework for building React applications that require server-side rendering, static site generation, or a hybrid approach. Its built-in features, such as file-based routing, API routes, and image optimization, make it an excellent choice for both developers and businesses looking to create fast, scalable, and SEO-friendly applications',
        icon: 'next_js.svg',
        type: 'core'

      },
      {
        name: 'Node JS',
        description: 'Powerful and versatile runtime environment for building server-side applications',
        icon: 'node_icon.svg',
        type: 'core'

      },
      {
        name: 'Express',
        description: 'A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.',
        icon: 'express_icon.svg',
        type: 'core'

      },
      {
        name: 'MongoDB',
        description: 'MongoDB is a powerful, flexible, and scalable NoSQL database that is well-suited for modern applications dealing with large volumes of unstructured or semi-structured data',
        icon: 'mongo_db.svg',
        type: 'core'

      },
      {
        name: 'Git',
        description: 'Tools to a manage version control system that is essential for modern software development',
        icon: 'git_icon.svg',
        type: 'core'

      }
    ]
    this.soft_skills = [
      {
        name: 'Communication',
        icon: 'team.svg',
        type: 'soft'
      },
      {
        name: 'Team Work',
        description: 'TypeScript is a robust, statically typed superset of JavaScript that enhances code quality, maintainability, and developer productivity',
        icon: 'commu.svg',
        type: 'soft'
      },
      {
        name: 'Interest With New Thing',
        icon: 'newthing.svg',
        type: 'soft'
      },
    ]
  }
}
