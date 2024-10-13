import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ExpandableSectionComponent} from "../../components/expandable-section/expandable-section.component";
import { NgForOf, NgIf } from "@angular/common";
import {Location} from '@angular/common';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {map} from "rxjs";
import { saveAs } from 'file-saver';
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {SimpleCardsComponent} from "../../components/simple-cards/simple-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";
import {NumberAnimationComponent} from "../../components/number-animation/number-animation.component";
import { ScrollMonitorDirective } from "../../directives/scroll-monitor.directive";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    RouterLink,
    ExpandableSectionComponent,
    NgForOf,
    HttpClientModule,
    NavigationComponent,
    SimpleCardsComponent,
    FooterNavigationComponent,
    NumberAnimationComponent,
    ScrollMonitorDirective,
    NgIf
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private location: Location, private http: HttpClient) {
  }

  cards = [
    {
      icon: 'medal',
      title: 'Proactive',
      text: 'I take initiative, act quickly, and keep projects on track to meet deadlines.'
    },
    {
      icon: 'graph',
      title: 'Committed to growth',
      text: 'I’m always learning, staying up to date with the latest design trends and techniques.'
    },
    {
      icon: 'square',
      title: 'Detail-oriented',
      text: 'I focus on the details, ensuring every design is polished and high-quality.'
    },
    {
      icon: 'stack',
      title: 'Organized',
      text: 'I maintain structure and prioritize tasks to ensure efficient workflows and timely delivery.'
    },
    {
      icon: 'people',
      title: 'Collaborative',
      text: 'I work well in teams, keeping everyone aligned and focused on shared goals.'
    },
    {
      icon: 'lamp',
      title: 'Creative thinker',
      text: 'I solve problems creatively, finding innovative solutions for unique user experiences.'
    }
  ]

  skillAndToolsetItems = [
    {
      title: 'UX/UI and graphic tools',
      items: [
        {
          name: 'Figma',
          icon: 'figma',
        },
        {
          name: 'Sketch',
          icon: 'sketch',
        },
        {
          name: 'Adobe creative suite',
          icon: 'adobe',
        },
        {
          name: 'Miro',
          icon: 'miro',
        },
        {
          name: 'Whimsical',
          icon: 'whimsical',
        },
        {
          name: 'Protopie',
          icon: 'protopie',
        },
        {
          name: 'Zeroheight',
          icon: 'zeroheight',
        }
      ]
    },
    {
      title: 'Analytics',
      items: [
        {
          name: 'Google analytics',
          icon: 'analytics',
        },
        {
          name: 'Pendo',
          icon: 'pendo',
        },
        {
          name: 'Hotjar',
          icon: 'hotjar',
        },
        {
          name: 'Qualitative methods',
          icon: 'qualitative',
        },
        {
          name: 'Quantitative methods',
          icon: 'quantitative',
        },
        {
          name: 'Researches',
          icon: 'competitor',
        },
      ]
    },
    {
      title: 'UX frameworks',
      items: [
        {
          name: 'Problem definition',
          icon: 'problem-definition'
        },
        {
          name: 'Strategic thinking',
          icon: 'strategic-thinking'
        },
        {
          name: 'Product growth',
          icon: 'product-growth'
        },
        {
          name: 'Design thinking approach',
          icon: 'design-thinking',
        },
        {
          name: 'Heuristic evaluation',
          icon: 'heuristic-evaluation',
        },
        {
          name: 'UX strategy',
          icon: 'ux-strategy',
        },
        {
          name: 'UX research',
          icon: 'ux-research',
        },
        {
          name: 'Data-driven management',
          icon: 'data-driven-management',
        },
        {
          name: 'Customer journey map',
          icon: 'customer-journey',
        },
        {
          name: 'User flow',
          icon: 'user-flow',
        },
        {
          name: 'A/B testing',
          icon: 'ab-testing',
        },
        {
          name: 'Usability testing',
          icon: 'usability-testing',
        },
      ]
    },
    {
      title: 'UI & interaction design',
      items: [
        {
          name: 'Web app design',
          icon: 'web-design',
        },
        {
          name: 'Responsive/Adaptive design',
          icon: 'white-label',
        },
        {
          name: 'Mobile app design (iOS & Android)',
          icon: 'mobile-app-design',
        },
        {
          name: 'White label',
          icon: 'design-system',
        },
        {
          name: 'Apple CarPlay/Android Auto/AAOS',
          icon: 'car',
        },
        {
          name: 'Integrations',
          icon: 'integrations',
        },
        {
          name: 'Embedded systems',
          icon: 'embedded-systems',
        },
        {
          name: 'Design system/Design documentation',
          icon: 'palette-white',
        },
        {
          name: 'Guidelines',
          icon: 'guidelines',
        },
        {
          name: 'Prototyping',
          icon: 'prototyping',
        },
        {
          name: 'Accessibility',
          icon: 'accessibility-white',
        },
      ]
    },
    {
      title: 'Additional skills',
      items: [
        {
          name: 'Team management',
          icon: 'team-management',
        },
        {
          name: 'Mentoring',
          icon: 'mentoring',
        },
        {
          name: 'HTML/CSS basics',
          icon: 'html',
        },
        {
          name: 'JavaScript basics',
          icon: 'javascript',
        }
      ]
    },
  ]

  experienceList = [
    {
      name: 'Car IQ Inc.',
      period: 'Oct 2022 - Aug 2024',
      position: 'Lead Senior Product Designer',
      companyType: 'Product',
      responsibilities: ['Led the design team of 3 designers, created and distributed tasks, approved design solutions, doubling team output.',
        'Created design systems, documentation, guidelines, and set up design principles that decreased the design process time by ~40%.',
        'Conducted data analysis, user testing and interviews, A/B testing, created and tested hypotheses, etc. resulting in a ~60% improvement in usability and user engagement.',
        'Collaborated with developers, conducted design QA, set up bug tracker system, reducing the sprint release issues by ~35%.',
        'Created mobile/web applications, integrations, white-labels, increasing SUS score to 82,8% and task completion rate to 93.6%.',
        'Collaborated with other departments, participated in product growth/monetisation and brought the product to the market leaders.'
      ],
      relatedProjectTitle: 'Payment platform for fleets',
      relatedProjectSubtitle: 'Enables vehicles to initiate, validate, and complete authorized transactions.',
      relatedProjectLink: 'car-iq-pay'
    },
    {
      name: 'Cieden',
      period: 'Jun 2021 - Oct 2022',
      position: 'Lead Senior Product Designer',
      companyType: 'Outsource, Outstaff',
      responsibilities: ['Led the design team of 4 designers, hiring new designers, and assisting with managing internal company structure.',
        'Led the calls with clients and stakeholders.',
        'Conducted data analysis, competitor/user researches, audits, user testing/interviews, created and testing hypotheses.',
        'Created mobile/web applications, prototypes, design systems, documentation, and guidelines.',
        'Conducted knowledge sharings and lectures for team members.',
        'Participated in the pre-sales stage.'
      ],
      relatedProjectTitle: 'Q&A platform & e-Book reader',
      relatedProjectSubtitle: 'Provides seamless content sharing and engaging interactive reading.',
      relatedProjectLink: 'clarity'
    },
    {
      name: 'Excited',
      period: 'May 2020 - Mar 2021',
      position: 'Product designer',
      companyType: 'Outsource',
      responsibilities: ['Led the calls with clients and stakeholders.',
        'Conducted data analysis, competitor/user researches, audits, created and testing hypotheses.',
        'Created mobile/web applications, prototypes, design systems.',
        'Conducted knowledge sharings for team members.'
      ]
    },
    {
      name: 'Sigma Software Group',
      period: 'Sep 2019 - May 2020',
      position: 'UX/UI designer',
      companyType: 'Outsource, Outstaff',
      responsibilities: ['Participated in the calls with clients and stakeholders.',
        'Conducted data analysis, competitor/user researches, audits.',
        'Created mobile/web applications, prototypes, design systems.',
        'Created printing materials, branding, logos, presentation templates.',
        'Created video materials and animations.'
      ]
    },
    {
      name: 'FocusWeb Studio',
      period: 'Oct 2018 - Aug 2019',
      position: 'UX/UI designer',
      companyType: 'Outsource',
      responsibilities: ['Participated in the calls with clients and stakeholders.',
        'Conducted competitor/user researches, audits.',
        'Created mobile/web applications, landing/corporate websites.'
      ]
    }
  ]

  openPDF(): void {
    this.http.get('assets/pdf/Resumé - Eduard Kvak.pdf', { responseType: 'blob' }).subscribe((blob: Blob) => {
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
    });
  }
}
