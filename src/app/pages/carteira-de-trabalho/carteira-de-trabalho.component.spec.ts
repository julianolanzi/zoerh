import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraDeTrabalhoComponent } from './carteira-de-trabalho.component';

describe('CarteiraDeTrabalhoComponent', () => {
  let component: CarteiraDeTrabalhoComponent;
  let fixture: ComponentFixture<CarteiraDeTrabalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraDeTrabalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteiraDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
