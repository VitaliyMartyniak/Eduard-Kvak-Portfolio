import { Component } from '@angular/core';
import {ExpandableSectionComponent} from "../../components/expandable-section/expandable-section.component";
import {Location, NgForOf, NgStyle} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {ProjectCardsComponent} from "../../components/project-cards/project-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";
import { ScrollMonitorDirective } from "../../directives/scroll-monitor.directive";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ExpandableSectionComponent,
    NgForOf,
    RouterLink,
    NgStyle,
    NavigationComponent,
    ProjectCardsComponent,
    FooterNavigationComponent,
    ScrollMonitorDirective
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private router: Router, private location: Location) {
  }

  projects = [
    {
      name: 'factually-health',
      title: 'Factually Health',
      subtitle: 'An AI-powered platform that provides accurate, comprehensive information on any health topic, combating misinformation and improving patient engagement.',
      contributions: [
        'Web app (responsive)',
        'Guidelines for developers',
        'Design system',
        'Prototype'
      ]
    },
    {
      name: 'car-iq-pay',
      title: 'Car IQ Pay',
      subtitle: 'The first payment platform to enable vehicles to initiate, validate, and complete authorized transactions.',
      contributions: [
        'Mobile app (iOS & Android)',
        'Integrations (Apple & Google Pay, White-labels, and more)',
        'Web app (responsive)',
        'Design system & Documentation',
        'Guidelines for designers',
        'Prototypes, Email template, Invoice template, and more'
      ]
    },
    {
      name: 'clarity',
      title: 'Clarity',
      subtitle: 'Advanced solutions for seamless content sharing and engaging interactive reading.',
      contributions: [
        'Q&A platform',
        'e-Book reader (responsive)',
        'Marketing website',
        'Design system',
      ]
    },
    {
      name: 'intelas',
      title: 'Intelas',
      subtitle: 'A leading platform in financial data standardization, aimed at real estate asset managers and accountants.',
      contributions: [
        'Web app',
        'Report builder',
        'Design system',
        'Prototype',
      ]
    },
    {
      name: 'formobile',
      title: 'FORMobile',
      subtitle: 'An innovative solution empowering citizens to easily report and track government-related issues.',
      contributions: [
        'Mobile app (iOS & Android)',
        'Design system',
      ]
    },
  ]
}
