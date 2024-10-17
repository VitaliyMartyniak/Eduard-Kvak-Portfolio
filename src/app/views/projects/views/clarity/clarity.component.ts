import { Component } from '@angular/core';
import { ExpandableSectionComponent } from "../../../../components/expandable-section/expandable-section.component";
import { ListComponent } from "../../components/list/list.component";
import { NgForOf, NgIf } from "@angular/common";
import { PreviewBlockComponent } from "../../components/preview-block/preview-block.component";
import { SingleProjectFooterComponent } from "../../components/single-project-footer/single-project-footer.component";
import { SingleProjectHeaderComponent } from "../../components/single-project-header/single-project-header.component";
import { PasswordCheckComponent } from "../../components/password-check/password-check.component";

@Component({
  selector: 'app-clarity',
  standalone: true,
    imports: [
        ExpandableSectionComponent,
        ListComponent,
        NgForOf,
        PreviewBlockComponent,
        SingleProjectFooterComponent,
        SingleProjectHeaderComponent,
        NgIf,
        PasswordCheckComponent
    ],
  templateUrl: './clarity.component.html',
  styleUrl: './clarity.component.scss'
})
export class ClarityComponent {
  passwordPassed = false;

  industries = ['EdTech'];

  workingProcessList = [
    {
      title: 'Research',
      content: `<span class="text">1. Analyzed target audience needs and preferences.<br>
            2. Examined competitors to identify market trends and opportunities.<br>
            3. Brainstormed ideas that aligned with both user and business needs.</span>`,
      opened: false,
      id: 1,
    },
    {
      title: 'Ideate',
      content: `<span class="text">1. Created wireframes to explore different design approaches.<br>
            2. Facilitated workshops with stakeholders to brainstorm and prioritize features.</span>`,
      opened: false,
      id: 2,
    },
    {
      title: 'Design',
      content: `<span class="text">1. Refined design concepts into polished, functional interfaces.<br>
            2. Established a UI Kit, ensuring consistency in visual components, typography, and layout across the entire design system.</span>`,
      opened: false,
      id: 3,
    },
    {
      title: 'Test',
      content: `<span class="text">1. Tested designs to gather feedback for usability improvements.<br>
            2. Iterated based on feedback from usability tests and stakeholder input to refine the designs and improve the user experience.</span>`,
      opened: false,
      id: 4,
    },
    {
      title: 'Deliver',
      content: `<span class="text">1. Prepare final design assets and documentation, ensuring that all design elements are clearly outlined.<br>
            2. Presented the final designs to stakeholders, ensuring alignment with business goals and user needs.<br>
            3. Provided ongoing support during the design transition phase.</span>`,
      opened: false,
      id: 5,
    },
  ]

  responsibilities = [
    'Conduct competitor and user analysis.',
    'Lead workshops with stakeholders to define product goals, gather insights, and drive design decisions.',
    'Create product architecture, wireframes, and mockups.',
    'Create design systems, documentations, and specifications.',
    'Conduct usability testing and gather feedback to iterate on designs and enhance the user experience.'
  ]

  challenges = [
    'The platform needed to combine the best elements of YouTube, Medium, and StackOverflow.',
    'Users needed the ability to ask questions, write articles, and upload videos in a consistent, customizable format.',
    'The system required a self-regulation feature that promoted experienced users to administrative roles.',
    'The platform needed to support multiple comment formats (voice, photo, video, code, text).',
    'The search tool needed to be highly customizable to meet diverse user needs.',
    'The e-book reader needed to support word/phrase search, highlights, and progress tracking.'
  ]

  results = [
    'Created a solution that successfully merged video, article, and Q&A functionalities into a unified, user-friendly experience.',
    'Developed a flexible content creation system that allows users to easily create and customize their content.',
    'Implemented a reward/bounty system enabling users to earn administrative privileges based on contributions.',
    'Designed a commenting system that allows users to leave comments in their preferred format.',
    'Designed a flexible search tool with parameters, hotkeys, and multi-format search capabilities.',
    'Implemented features like search, highlights, and progress tracking to enhance the reading experience.'
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
