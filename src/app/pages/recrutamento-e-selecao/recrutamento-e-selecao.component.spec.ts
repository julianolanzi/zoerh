import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutamentoESelecaoComponent } from './recrutamento-e-selecao.component';

describe('RecrutamentoESelecaoComponent', () => {
  let component: RecrutamentoESelecaoComponent;
  let fixture: ComponentFixture<RecrutamentoESelecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrutamentoESelecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrutamentoESelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
