import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";
import {ExpandableSectionComponent} from "../../../../components/expandable-section/expandable-section.component";
import {SimpleCardsComponent} from "../../../../components/simple-cards/simple-cards.component";
import {SingleProjectFooterComponent} from "../../components/single-project-footer/single-project-footer.component";
import { SingleProjectHeaderComponent } from "../../components/single-project-header/single-project-header.component";
import { ScrollMonitorDirective } from "../../../../directives/scroll-monitor.directive";
import { PasswordCheckComponent } from "../../components/password-check/password-check.component";
import { NumberAnimationComponent } from '../../../../components/number-animation/number-animation.component';
import { ListComponent } from '../../components/list/list.component';
import { PreviewBlockComponent } from '../../components/preview-block/preview-block.component';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';

@Component({
  selector: 'app-car-iq-pay-project',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    ExpandableSectionComponent,
    SimpleCardsComponent,
    SingleProjectFooterComponent,
    SingleProjectHeaderComponent,
    ScrollMonitorDirective,
    PasswordCheckComponent,
    NgIf,
    NumberAnimationComponent,
    ListComponent,
    PreviewBlockComponent,
    ImageSliderComponent
  ],
  templateUrl: './car-iq-pay-project.component.html',
  styleUrl: './car-iq-pay-project.component.scss'
})
export class CarIqPayProjectComponent {
  passwordPassed = false;

  selectedOption: string = 'directPay';

  industries = ['Automotive', 'FinTech'];

  workingProcessList = [
    {
      title: 'Plan',
      content: `<span class="text">1. Analyze ongoing data and feedback from the previous sprint.<br>
            2. Collaborate with stakeholders to brainstorm and define new features and enhancements.<br>
            3. Evaluate and prioritize features based on business goals and user needs.<br>
            4. Assign tasks and set sprint goals in alignment with the team’s capacity and timeline.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Create and iterate on wireframes to explore various design solutions for new features.<br>
            2. Develop high-fidelity mockups and interactive prototypes to visualize user flows.<br>
            3. Document design guidelines to ensure clarity and consistency.<br>
            4. Host collaborative sessions with developers and product managers to ensure alignment and technical feasibility.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Develop',
      content: `<span class="text">1. Work closely with the development team to implement features according to design assets and documentation.<br>
            2. Address design feedback during the build process, making adjustments as necessary to optimize user experience.<br>
            3. Ensure smooth integration of new features by conducting regular design reviews during development.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Test',
      content: `<span class="text">1. Deploy new builds to a mock and staging environment for testing.<br>
            2. Conduct usability and functional tests to validate design and user flows.<br>
            3. Identify issues and create detailed bug tickets for resolution, working collaboratively to fix high-priority items.</span>`,
      opened: false,
      id: 4,
    },
    {
      title: 'Release',
      content: `<span class="text">1. Release the finalized build to the production environment, ensuring a smooth deployment.<br>
            2. Monitor user interactions and engagement using tools like Pendo, while conducting A/B tests to measure the impact of new features.<br>
            3. Gather qualitative and quantitative feedback through user interviews and post-release testing to inform future iterations.</span>`,
      opened: false,
      id: 5,
    },
  ]

  appleCarPlayImages = [
    'apple-car-play-screen-1',
    'apple-car-play-screen-2',
    'apple-car-play-screen-3',
    'apple-car-play-screen-4',
    'apple-car-play-screen-5',
    'apple-car-play-screen-6'
  ]

  googleCarPlayImages = [
    'google-car-play-screen-1',
    'google-car-play-screen-2',
    'google-car-play-screen-3',
    'google-car-play-screen-4',
    'google-car-play-screen-5',
    'google-car-play-screen-6'
  ]

  responsibilities = [
    'Lead the design team, create and distributing tasks, approve design solutions.',
    'Conduct competitor and user analysis.',
    'Create and test hypotheses, conduct user testing/interviews, A/B testing, and more.',
    'Create product architecture, wireframes, mockups, integrations, white labels, prototypes, and more.',
    'Collaborate with developers, conduct design QA, and task creation.',
    'Create design systems, documentation, and guidelines.',
    'Collaborate with other departments, define product growth/monetization.',
  ]

  challenges = [
    'Many drivers had limited user experience with mobile apps and payment methods like Apple Pay and Google Pay.',
    'Drivers had varying working styles, preferences, and workflow needs.',
    'Mobile app extensions, integrations, and payments had a lot of requirements and limitations from the third-party companies.',
    'The fleet companies usually have a complex hierarchy with various user type.',
    'The complexity of the vehicles and driver management.',
    'All products and extensions should meet WCAG accessibility requirements.'
  ]

  results = [
    'Designed simple, intuitive flows using the best UX practices, including clear step-by-step payment processes with user guides and support centre.',
    'Designed the app the way it automatically adapts to each driver\'s preferences and personalise flows.',
    'Adhered to all requirements from third-party companies starting from the visual assets and ending the error handling.',
    'Designed the web app interface with multiple user access levels, allowing them to easily switch between different fleet levels and perform the necessary actions with clear, intuitive controls.',
    'Developed an intuitive solution allowing managers to easily group vehicles, assign drivers with restricted access, and set purchase rules.',
    'Ensured the products adhered to WCAG guidelines, meeting contrast ratios, incorporating readable fonts, proper scaling, etc.'
  ]

  toggleSection(id: number) {
    this.workingProcessList.forEach(item => {
      if (item.id !== id) {
        item.opened = false;
      } else {
        item.opened = !item.opened;
      }
    })
  }

  setOption(option: string) {
    this.selectedOption = option;
  }

  showProject() {
    this.passwordPassed = true;
  }
}

