import { ContactComponent } from './../../pages/contact/contact.component';
import { AboutComponent } from './../../pages/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const WebRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
