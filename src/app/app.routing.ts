import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './layouts/web/web.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/layouts/web/web.module').then((m) => m.WebModule),
      },
    ],
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
