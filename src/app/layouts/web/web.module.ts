import { ContactComponent } from './../../pages/contact/contact.component';
import { AboutComponent } from './../../pages/about/about.component';
import { HomeComponent } from './../../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutes } from './web.routing';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WebRoutes),
  ]
})
export class WebModule { }
