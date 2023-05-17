import { ContactComponent } from './../../pages/contact/contact.component';
import { AboutComponent } from './../../pages/about/about.component';
import { HomeComponent } from './../../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutes } from './web.routing';
import { NossaHistoriaComponent } from 'src/app/pages/nossa-historia/nossa-historia.component';
import { RecrutamentoESelecaoComponent } from 'src/app/pages/recrutamento-e-selecao/recrutamento-e-selecao.component';
import { MaoDeObraTemporariaComponent } from 'src/app/pages/mao-de-obra-temporaria/mao-de-obra-temporaria.component';
import { AvaliacaoPsicologicaComponent } from 'src/app/pages/avaliacao-psicologica/avaliacao-psicologica.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CarteiraDeTrabalhoComponent } from 'src/app/pages/carteira-de-trabalho/carteira-de-trabalho.component';
import { EntrevistasOnlineComponent } from 'src/app/pages/entrevistas-online/entrevistas-online.component';
import { AutogerenciamentoComponent } from 'src/app/pages/autogerenciamento/autogerenciamento.component';
import { DicasEntrevistasComponent } from 'src/app/pages/dicas-entrevistas/dicas-entrevistas.component';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NossaHistoriaComponent,
    RecrutamentoESelecaoComponent,
    MaoDeObraTemporariaComponent,
    AvaliacaoPsicologicaComponent,
    CarteiraDeTrabalhoComponent,
    EntrevistasOnlineComponent,
    AutogerenciamentoComponent,
    DicasEntrevistasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WebRoutes),
    CarouselModule,
    MatExpansionModule,
    CdkAccordionModule,
  ],
})
export class WebModule {}
