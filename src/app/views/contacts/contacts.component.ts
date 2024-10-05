import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    RouterLink,
    NavigationComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
