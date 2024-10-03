import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ProjectsComponent } from './views/projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'projects', component: ProjectsComponent },
  // { path: 'projects/car-iq-pay', component: CarIqPayProjectComponent },
  // { path: 'projects/clarity', component: ClarityProjectComponent },
  // { path: 'projects/intelas', component: IntelasProjectComponent },
  // { path: 'projects/alifBee-kids', component: AlifBeeKidsProjectComponent },
  { path: '**', redirectTo: '/home' },
];
