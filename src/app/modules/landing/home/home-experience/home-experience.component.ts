import { FuseMediaWatcherService } from './../../../../../@fuse/services/media-watcher/media-watcher.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MENU} from "../../../../core/services/menu/menu.constant";
import { AnimationItem } from 'lottie-web';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-home-experience',
  standalone: true,
  animations: [
    trigger('entranceLeft', [
      state(
        'invisible', style({
          transform: 'translate(-150px, 0) scale(1)',
          opacity: 0
        })
      ),
      state(
        'visible', style({
          transform: 'translate(0, 0) scale(1)',
          opacity: 1
        })
      ),
      transition('invisible => visible', animate('600ms 0.5s ease-in')),
      transition('visible => invisible', animate('600ms 0.5s ease-out'))
    ])
  ],
  imports: [CommonModule, LottieComponent],
  templateUrl: './home-experience.component.html',
  styleUrl: './home-experience.component.scss'
})
export class HomeExperienceComponent implements OnInit, OnDestroy{
  public isAnimated = true//Where ever you get this value.
  public animationState: string = 'visible' //Or Enum with visible/invisible.
  options: AnimationOptions = {
    path: '/assets/lottie/cat-code.json',
  };
  steps: {
    title: string;
    description: string;
  }[];

  experiences: {
    title: string;
    subtitle: string;
    icon: string;
    dateStart: string | number;
    dateEnd: string | number;
    width?: string | number;
  }[];

  isSmallScreen: boolean;

  _unsubscribeAll = new Subject();

  constructor(
    private fuseWMediaWatcher: FuseMediaWatcherService
  ) {
    this.fuseWMediaWatcher.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
      this.isSmallScreen = !res.matchingAliases.includes('sm');
    })
    this.steps = [
      {
        title: 'Make it',
        description: 'I sketch wireframes and make prototypes. Talking through tactile designs existing in the browser is worth its weight. Design tools only carry you so far; the rest should be realized with a link my team can rally around.'
      },
      {
        title: 'Collaborate',
        description: 'Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I aim to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback.'
      },
      {
        title: 'Accessible FTW',
        description: 'I aim to make everything I design and develope accessible to all for one main reason - it\'s the right thing to do. Accessible products benefit the many, not the few.'
      },
      // {
      //   title: 'Keep experimenting',
      //   description: 'Everything I create is subject to change and experimentation. Not everything will work, but it\'s worth trying - and learning from what doesn\'t.'
      // }
    ]
    this.experiences = [
      {
        title: 'Esoftdream',
        subtitle: 'Design and Development',
        icon: '',
        dateStart: '2019',
        dateEnd: '2022',
      },
      {
        title: 'Badan Sistem Informasi (UII)',
        subtitle: 'Frontend Developer',
        icon: '',
        dateStart: '2022',
        dateEnd: '2023'
      },
      {
        title: 'Multipolar',
        subtitle: 'Frontend Developer',
        icon: '',
        dateStart: '2022',
        dateEnd: '2024'
      },
      {
        title: 'Gaji.id',
        subtitle: 'Frontend Developer',
        icon: '',
        dateStart: '2023',
        dateEnd: '2024'
      },
    ]

    // this.experiences.forEach((exp) => {
    //   let total += exp.dateEnd as number - exp.dateStart as number;
    // })

    const totalPercentage = this.experiences.map(item => (item.dateEnd as number) - (item.dateStart as number)).reduce((prev, next) => prev + next);

    this.experiences = this.experiences.map((exp) => {
      const gapDate: number = (exp.dateEnd as number) - (exp.dateStart as number);
      const width = (gapDate / totalPercentage) * 100;
      return {
        ...exp,
        width: width
      }
    })
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.animationState = 'visible'
    }, 500)
    if (this.isAnimated) {
      this.animationState = 'visible'
    }
  }

  public ngOnDestroy(): void {
    if (this.isAnimated && this.animationState === 'visible') {
      this.animationState = 'invisible'
    }
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete
  }

  protected readonly menus = MENU;
}
