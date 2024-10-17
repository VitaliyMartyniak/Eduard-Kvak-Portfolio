import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {ProjectCardsComponent} from "../../components/project-cards/project-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";
import {SimpleCardsComponent} from "../../components/simple-cards/simple-cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NavigationComponent,
    ProjectCardsComponent,
    FooterNavigationComponent,
    SimpleCardsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  cards = [
    {
      icon: 'compass',
      title: 'Design strategy',
      text: 'Developing comprehensive design strategies that align with business goals and user needs, ensuring a seamless and impactful user experience.'
    },
    {
      icon: 'bubbles',
      title: 'Data analytics',
      text: 'Utilizing data analytics to inform design decisions, optimize user experiences, and measure the effectiveness of design solutions to drive continuous improvement.'
    },
    {
      icon: 'trophy',
      title: 'UX leadership',
      text: 'Leading and mentoring design teams, fostering a collaborative environment, and driving innovative UX practices across projects.'
    },
    {
      icon: 'table',
      title: 'User interfaces',
      text: 'Crafting intuitive and visually appealing user interfaces that enhance usability and delight users across digital platforms, ensuring consistency and accessibility.'
    },
    {
      icon: 'window',
      title: 'Interaction design',
      text: 'Designing interactive elements that improve user engagement, ensuring a smooth and intuitive user journey.'
    },
    {
      icon: 'palette',
      title: 'Design documentation',
      text: 'Creating detailed design documentation to communicate design decisions, guidelines, and processes clearly and effectively.'
    }
  ]

  projects = [
    {
      name: 'factually-health',
      title: 'Factually Health',
      subtitle: 'AI-driven platform for companies and patients in the health industry',
      descriptionText: 'A comprehensive solution that helps patients access credible, up-to-date health information.',
      industries: ['HealthTech'],
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
      subtitle: 'Payment platform for fleets',
      descriptionText: 'A revolutionary solution that enables vehicles to initiate, validate, and complete authorized transactions.',
      industries: ['Automotive', 'FinTech'],
      contributions: [
        'Mobile app (iOS & Android)',
        'Web app (responsive)',
        'Integrations (Apple & Google Pay), White labels',
        'Apple CarPlay/Android Auto',
        'Design systems, Documentation, Guidelines',
        'Prototypes, Email template, Invoice template'
      ]
    },
  ]

  constructor() {
  }
}
