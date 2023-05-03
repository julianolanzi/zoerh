import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoPsicologicaComponent } from './avaliacao-psicologica.component';

describe('AvaliacaoPsicologicaComponent', () => {
  let component: AvaliacaoPsicologicaComponent;
  let fixture: ComponentFixture<AvaliacaoPsicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoPsicologicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoPsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
