import { WebComponent } from './layouts/web/web.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { WebModule } from './layouts/web/web.module';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { PoliticaDePrivacidadeComponent } from './pages/politica-de-privacidade/politica-de-privacidade.component';

@NgModule({
  declarations: [AppComponent, WebComponent, PoliticaDePrivacidadeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    WebModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
