import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasEntrevistasComponent } from './dicas-entrevistas.component';

describe('DicasEntrevistasComponent', () => {
  let component: DicasEntrevistasComponent;
  let fixture: ComponentFixture<DicasEntrevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicasEntrevistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicasEntrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
