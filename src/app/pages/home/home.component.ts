import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items = [
    {
      title: 'NOSSO SITE ESTÁ DE CARA NOVA!!!',
      text: 'A partir de agora todas as nossas vagas estão sendo divulgadas dentro do nosso site, então acompanhe as atualizações e não fique de fora, pois sua recolocação no mercado pode estar mais perto do que você imagina!!!',
    },
    {
      title: 'PENSANDO NA SEGURANÇA DO NOSSO PRINCIPAL CLIENTE (VOCÊ!)',
      text: 'Com o aumento da pandemia e alinhados as normas da Lei LGPD (Lei Geral de Proteção de Dados) a Zoe RH está utilizando nosso site para captação de currículos e agilidade nos processos seletivos, para que você continue sendo bem atendido e nossos serviços mantenham a mesma qualidade de sempre, então corra e cadastre seu Currículo já!!',
    },
    {
      title: 'PARA QUE SEU CV SEJA ENCONTRADO COM MAIS RAPIDEZ POR NOSSAS RECRUTADORAS, SEGUEM ALGUMAS DICAS PRA VOCÊ:',
      text: 'Atualize sempre que necessário, informações como, telefone para contato, datas de admissão e saída dos empregos anteriores e cursos extracurriculares que você tenha feito e que não estão informados, isso aumentará suas chances de participar dos processos seletivos!!',
    },
  ];
  expandedIndex = 0;

  apiData = [
    {
      albumId: '1',
      id: '1',
      title: 'teste',
      url: 'http://localhost:4200/assets/imagem-quem-somos-768x560.jpg',
      thumbnailUrl:
        'http://localhost:4200/assets/imagem-quem-somos-768x560.jpg',
      text: 'test',
    },
    {
      albumId: '1',
      id: '1',
      title: 'teste',
      url: 'http://localhost:4200/assets/imagem-quem-somos-768x560.jpg',
      thumbnailUrl:
        'http://localhost:4200/assets/imagem-quem-somos-768x560.jpg',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      100: {
        items: 2,
      },
      200: {
        items: 3,
      },
      300: {
        items: 1,
      },
    },
    nav: true,
  };
  ngOnInit(): void {}
}
