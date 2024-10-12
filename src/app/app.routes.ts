import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { CarIqPayProjectComponent } from './views/projects/views/car-iq-pay-project/car-iq-pay-project.component';
import { FactuallyHealthComponent } from './views/projects/views/factually-health/factually-health.component';
import { ClarityComponent } from './views/projects/views/clarity/clarity.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/car-iq-pay', component: CarIqPayProjectComponent },
  { path: 'projects/factually-health', component: FactuallyHealthComponent },
  { path: 'projects/clarity', component: ClarityComponent },
  { path: '**', redirectTo: '/home' },
];
