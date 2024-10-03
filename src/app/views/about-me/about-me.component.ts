import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ExpandableSectionComponent} from "../../components/expandable-section/expandable-section.component";
import {NgForOf} from "@angular/common";
import {Location} from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map, Observable} from "rxjs";
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
    ScrollMonitorDirective
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
      text: 'I take the initiative in identifying opportunities for improvement and act on them promptly. ' +
        'My proactive approach ensures that projects are always moving forward and deadlines are met.'
    },
    {
      icon: 'graph',
      title: 'Committed to growth',
      text: 'I am dedicated to continuous learning and professional development. I regularly engage in courses, ' +
        'workshops, and reading to stay updated with the latest design trends and technologies.'
    },
    {
      icon: 'square',
      title: 'Detail-oriented',
      text: 'I have a keen eye for detail, ensuring that every element of my design is polished and precise. This meticulousness ' +
        'helps in creating high-quality, error-free deliverables.'
    },
    {
      icon: 'stack',
      title: 'Organized',
      text: 'I excel at managing multiple projects simultaneously while maintaining a clear structure and prioritization. ' +
        'My organizational skills ensure efficient workflow and timely completion of tasks.'
    },
    {
      icon: 'people',
      title: 'Collaborative',
      text: 'I thrive in team environments and excel at communication and collaboration. Working closely with cross-functional ' +
        'teams, I ensure that everyone is aligned and working towards a common goal.'
    },
    {
      icon: 'lamp',
      title: 'Creative thinker',
      text: 'I approach problems with a creative mindset, finding innovative solutions that go beyond the conventional. ' +
        'My creativity helps in designing unique and engaging user experiences.'
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
      description: 'Car IQ Pay is the first payment platform to enable vehicles to initiate, validate, and complete authorized ' +
        'transactions. The system eliminates the need for credit cards by connecting vehicles directly to merchants for secure, seamless payments.',
      period: 'Oct 2022 - Aug 2024',
      position: 'Senior-lead product designer',
      companyType: 'Product',
      responsibilities: ['Leading the design team, creating and distributing tasks, approving design solutions.',
        'Data analysis, creating and testing hypotheses, conducting user testing/ interviews, A/B testing, and more.',
        'Close collaboration with developers, conducting design QA, and task creation.',
        'Creating product architecture and mockups (mobile/web applications), integrations, white labels, prototypes, and more.',
        'Creating design systems, documentation, and guidelines.',
        'Collaboration with other departments, defining product growth/monetization.'
      ]
    },
    {
      name: 'Cieden',
      description: 'Cieden is a digital product design and marketing agency with operations in the United States and Eastern Europe. ' +
        'The agency specializes in creating user-centric designs and providing strategic marketing solutions for a diverse range of clients.',
      period: 'Jun 2021 - Oct 2022',
      position: 'Senior-lead product designer',
      companyType: 'Outsource, Outstaff',
      responsibilities: ['Leading the design team, hiring new designers, and assisting with managing internal company structure.',
        'Leading the calls with clients and stakeholders.',
        'Data analysis, including metrics & KPIs, creating and testing hypotheses, conducting user testing, interviews, A/B testing, audits, and more.',
        'Creating mobile/web applications, prototypes, design systems, documentation, and guidelines.',
        'Conducting knowledge sharings and lectures for team members.',
        'Active participation in the pre-sales stage.'
      ]
    },
    {
      name: 'Excited',
      description: 'Excited is a digital product design agency that focuses on creating innovative and user-friendly designs for a variety' +
        ' of digital platforms, helping clients enhance their online presence and user engagement.',
      period: 'May 2020 - Mar 2021',
      position: 'Product designer',
      companyType: 'Outsource',
      responsibilities: ['Leading the calls with clients and stakeholders.',
        'Data analysis, creating and testing hypotheses, conducting competitor/user research, audits.',
        'Creating mobile/web applications, prototypes, design systems.',
        'Conducting knowledge sharings for team members.'
      ]
    },
    {
      name: 'Sigma Software Group',
      description: 'Sigma Software Group is a full-cycle company that provides top-quality software development, ' +
        'graphic design, testing, and support services to a global clientele, focusing on innovative and efficient solutions.',
      period: 'Sep 2019 - May 2020',
      position: 'UX/UI designer',
      companyType: 'Outsource, Outstaff',
      responsibilities: ['Participating in the calls with clients and stakeholders.',
        'Data analysis, creating and testing hypotheses, conducting competitor/user research, audits.',
        'Creating mobile/web applications, prototypes, design systems.',
        'Creating printing materials, branding, logos, presentation templates.',
        'Creating video materials and animations.'
      ]
    },
    {
      name: 'FocusWeb Studio',
      description: 'FocusWeb Studio is a digital design agency that specializes in creating visually appealing ' +
        'and highly functional websites and mobile applications, providing clients with custom solutions to enhance their digital presence.',
      period: 'Oct 2018 - Aug 2019',
      position: 'UX/UI designer',
      companyType: 'Outsource',
      responsibilities: ['Participating in the calls with clients and stakeholders.',
        'Conducting competitor/user research, audits.',
        'Creating mobile applications, landing/corporate websites.'
      ]
    }
  ]

  downloadPdf(): void {
    this.http.get('assets/pdf/CV.pdf', { responseType: 'blob' }).pipe(
      map((blob: Blob) => {
        saveAs(blob, 'Eduard Kvak CV');
      })
    ).subscribe();
  }
}
