import { Component } from '@angular/core';
import {ExpandableSectionComponent} from "../../components/expandable-section/expandable-section.component";
import {Location, NgForOf, NgStyle} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {ProjectCardsComponent} from "../../components/project-cards/project-cards.component";
import {FooterNavigationComponent} from "../../components/footer-navigation/footer-navigation.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(private http: HttpClient) {
  }

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
    {
      name: 'clarity',
      title: 'Clarity',
      subtitle: 'Q&A platform & e-Book reader',
      descriptionText: 'Provides seamless content sharing and engaging interactive reading.',
      industries: ['EdTech'],
      contributions: [
        'Q&A platform',
        'e-Book reader (responsive)',
        'Marketing website',
        'Design system',
      ]
    }
  ]

  openPDF(): void {
    this.http.get('assets/pdf/Projects - Eduard Kvak.pdf', { responseType: 'blob' }).subscribe((blob: Blob) => {
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
    });
  }
}
