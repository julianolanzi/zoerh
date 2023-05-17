import { EntrevistasOnlineComponent } from './../../pages/entrevistas-online/entrevistas-online.component';
import { DicasEntrevistasComponent } from './../../pages/dicas-entrevistas/dicas-entrevistas.component';
import { AutogerenciamentoComponent } from './../../pages/autogerenciamento/autogerenciamento.component';
import { CarteiraDeTrabalhoComponent } from './../../pages/carteira-de-trabalho/carteira-de-trabalho.component';
import { PoliticaDePrivacidadeComponent } from './../../pages/politica-de-privacidade/politica-de-privacidade.component';
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
  { path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent },
  { path: 'recrutamento-e-selecao', component: RecrutamentoESelecaoComponent },
  { path: 'mao-de-obra-temporaria', component: MaoDeObraTemporariaComponent },
  { path: 'avaliacao-psicologica', component: AvaliacaoPsicologicaComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'carteira-de-trabalho', component: CarteiraDeTrabalhoComponent },
  { path: 'autogerenciamento', component: AutogerenciamentoComponent },
  { path: 'dicas', component: DicasEntrevistasComponent },
  { path: 'entrevistas', component: EntrevistasOnlineComponent },
];
