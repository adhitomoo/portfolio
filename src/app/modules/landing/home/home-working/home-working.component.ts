import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeExperienceComponent} from "../home-experience/home-experience.component";
import {MatIconModule} from "@angular/material/icon";
import {BlockSectionHomeWorkingComponent} from "./block-section-home-working/block-section-home-working.component";
import {ListWorkingModel} from "./home-working";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-working',
  standalone: true,
  imports: [CommonModule, HomeExperienceComponent, MatIconModule, BlockSectionHomeWorkingComponent],
  templateUrl: './home-working.component.html',
  styleUrl: './home-working.component.scss',
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
export class HomeWorkingComponent {
  public listWorking: ListWorkingModel[] = [];
  public listOnProgress: ListWorkingModel[] = [];

  constructor() {
    this.listWorking = [
      {
        title: 'Saudagar Emas',
        subtitle: 'MARKETPLACE',
        color: 'bg-yellow-200',
        grid: 'col-span-2',
        icon_1: 'star_1.svg',
        class_1: '-top-20',
        image: 'saudagar_emas.png'
      },
      {
        title: 'MJA Gaharu',
        subtitle: 'COMPANY PROFILE',
        color: 'bg-teal-200',
        grid: 'col-span-3',
        icon_1: 'card_figma.svg',
        icon_2: 'card_docs.svg',
        class_1: '-top-20',
        class_2: '-top-20 right-100',
        image: 'mja_gaharu.png'
      },
      {
        title: 'UII Recruitment',
        subtitle: 'SOFTWARE INTERNAL',
        color: 'bg-blue-200',
        grid: 'col-span-3',
        icon_1: 'flourish_figma.svg',
        icon_2: 'card_docs_1.svg',
        class_1: '-left-20 top-50',
        class_2: '-top-20',
        image: 'uii_recruitment.png'
      },
      {
        title: 'MULTIPOLAR',
        subtitle: 'SOFTWARE INTERNAL',
        color: 'bg-violet-200',
        grid: 'col-span-2',
        icon_1: 'flourish_mobile.svg',
        class_1: '-top-18 -right-20',
        image: 'bank_bsb.png'
      },
      {
        title: 'Admin Absensi Kabupaten Bambu',
        subtitle: 'SCHOOL',
        color: 'bg-violet-200',
        grid: 'col-span-2',
        icon_1: 'flourish_mobile.svg',
        icon_2: 'star_1.svg',
        class_1: '-top-18 -left-10',
        class_2: 'bottom-0 -right-10',
        image: 'admin_absensi.png'
      },
      {
        title: 'My Pokedex',
        subtitle: 'MINI GAMES',
        color: 'bg-violet-200',
        grid: 'col-span-3',
        icon_1: 'card_docs_1.svg',
        class_1: '-top-18 -left-10',
        image: 'mini_game.png'
      },
      {
        title: 'PT DSN',
        subtitle: 'COMPANY PROFILE',
        color: 'bg-red-200',
        grid: 'col-span-3',
        icon_1: 'flourish_figma.svg',
        icon_2: 'card_docs_1.svg',
        class_1: '-top-18 -right-20',
        class_2: '-left-20 top-50',
        image: 'pt_dsn.png'
      }


    ]
    this.listOnProgress = [
      {
        title: 'MODI Ultimate',
        subtitle: 'SOFTWARE INTERN',
        color: 'bg-white',
        grid: 'col-span-3',
        image: 'company/saudagar_emas.png'
      },
      {
        title: 'Vici Dashboard',
        subtitle: 'SOFTWARE INTERN',
        color: 'bg-gray-200',
        grid: 'col-span-2',
        image: 'company/saudagar_emas.png'
      },
    ]
  }

}
