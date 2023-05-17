import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutogerenciamentoComponent } from './autogerenciamento.component';

describe('AutogerenciamentoComponent', () => {
  let component: AutogerenciamentoComponent;
  let fixture: ComponentFixture<AutogerenciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutogerenciamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutogerenciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
