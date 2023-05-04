import { WebComponent } from './layouts/web/web.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { WebModule } from './layouts/web/web.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { PoliticaDePrivacidadeComponent } from './pages/politica-de-privacidade/politica-de-privacidade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, WebComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    WebModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
