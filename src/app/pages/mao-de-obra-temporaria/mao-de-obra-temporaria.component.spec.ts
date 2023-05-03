import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaoDeObraTemporariaComponent } from './mao-de-obra-temporaria.component';

describe('MaoDeObraTemporariaComponent', () => {
  let component: MaoDeObraTemporariaComponent;
  let fixture: ComponentFixture<MaoDeObraTemporariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaoDeObraTemporariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaoDeObraTemporariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
