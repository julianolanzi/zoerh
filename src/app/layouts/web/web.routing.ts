import { AvaliacaoPsicologicaComponent } from 'src/app/pages/avaliacao-psicologica/avaliacao-psicologica.component';
import { MaoDeObraTemporariaComponent } from './../../pages/mao-de-obra-temporaria/mao-de-obra-temporaria.component';
import { RecrutamentoESelecaoComponent } from './../../pages/recrutamento-e-selecao/recrutamento-e-selecao.component';
import { ContactComponent } from './../../pages/contact/contact.component';
import { AboutComponent } from './../../pages/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const WebRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nossa-historia', component: AboutComponent },
  { path: 'recrutamento-e-selecao', component: RecrutamentoESelecaoComponent },
  { path: 'mao-de-obra-temporaria', component: MaoDeObraTemporariaComponent },
  { path: 'avaliacao-psicologica', component: AvaliacaoPsicologicaComponent },
  { path: 'contato', component: ContactComponent },
];
