import { Component } from '@angular/core';
import { ExpandableSectionComponent } from "../../../../components/expandable-section/expandable-section.component";
import { ImageSliderComponent } from "../../components/image-slider/image-slider.component";
import { ListComponent } from "../../components/list/list.component";
import { NgForOf, NgIf } from "@angular/common";
import { PreviewBlockComponent } from "../../components/preview-block/preview-block.component";
import { ScrollMonitorDirective } from "../../../../directives/scroll-monitor.directive";
import { SingleProjectFooterComponent } from "../../components/single-project-footer/single-project-footer.component";
import { SingleProjectHeaderComponent } from "../../components/single-project-header/single-project-header.component";
import { PasswordCheckComponent } from "../../components/password-check/password-check.component";

@Component({
  selector: 'app-factually-health',
  standalone: true,
    imports: [
        ExpandableSectionComponent,
        ImageSliderComponent,
        ListComponent,
        NgForOf,
        NgIf,
        PreviewBlockComponent,
        ScrollMonitorDirective,
        SingleProjectFooterComponent,
        SingleProjectHeaderComponent,
        PasswordCheckComponent
    ],
  templateUrl: './factually-health.component.html',
  styleUrl: './factually-health.component.scss'
})
export class FactuallyHealthComponent {
  passwordPassed = false;

  industries = ['HealthTech'];

  workingProcessList = [
    {
      title: 'Research',
      content: `<span class="text">1. Analyzed target audience needs and preferences.<br>
            2. Clarified business goals and aligned them with user expectations.<br>
            3. Conducted competitor analysis to identify market gaps and opportunities.<br>
            4. Investigated user behaviors through analytics and usability testing to inform design decisions.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Ideate',
      content: `<span class="text">1. Developed mood boards and creative concepts to explore design directions and branding.<br>
            2. Designed wireframes to test different layout options, ensuring optimal user experience.<br>
            3. Facilitated workshops with stakeholders to brainstorm and iterate on product branding and functionality.<br>
            4. Sketched design solutions and refined concepts based on stakeholder feedback.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Create branding',
      content: `<span class="text">1. Defined fonts, colors, and visual elements for cohesive product identity.<br>
            2. Designed the product logo, ensuring alignment with brand identity.<br>
            3. Created essential brand assets, including icons and illustrations, to maintain consistency.<br>
            4. Developed branding guidelines.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Refined design concepts to create intuitive interfaces aligned with business and user needs.<br>
            2. Established a UI Kit to ensure consistency in visual components, typography, and layout across the design system.<br>
            3. Documented the style guide and design specifications for handoff to the development team.</span>`,
      opened: false,
      id: 4,
    },
    {
      title: 'Prototype',
      content: `<span class="text">1. Built interactive prototypes to simulate key user flows.<br>
            2. Conducted usability tests and gathered feedback to iterate on designs.<br>
            3. Refined designs based on feedback to enhance user experience before development.</span>`,
      opened: false,
      id: 5,
    },
  ]

  responsibilities = [
    'Conduct competitor and user analysis.',
    'Define and establish product branding and style guide.',
    'Develop product architecture, wireframes, mockups, and prototypes.',
    'Build the design system and create detailed guidelines for developers.',
    'Ensure the design process aligns with business goals and addresses user needs.',
    'Lead workshops with stakeholders to gather insights and drive design decisions.',
    'Conduct usability testing and iterate on designs based on feedback to enhance the user experience.',
  ]

  challenges = [
    'Target users had limited user experience and were often unfamiliar with AI tools.',
    'Both the Search Tool and HealthBot needed to be visible simultaneously to emphasize their individual importance.',
    'The platform must provide simple answers for patients and detailed results for doctors and scientists.',
    'The Search Tool had to deliver summaries for each analyzed source.',
    'The platform needed to meet WCAG accessibility standards.'
  ]

  results = [
    'Designed an intuitive interface using the best UX practices and created a clear user guide to help navigate the platform.',
    'Created a split-screen interface that allowed users to access and interact with both tools in parallel, enabling seamless multitasking and control.',
    'Added features like short and detailed summaries, rephrasing, and adjustable tone of voice to meet diverse user needs.',
    'Developed a solution for users to review analyzed data, view detailed summaries, and explore source material.',
    'Ensured the platform adhered to WCAG guidelines, meeting contrast ratios, incorporating readable fonts, and offering alternative interaction methods for key elements.'
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

  showProject() {
    this.passwordPassed = true;
  }
}
