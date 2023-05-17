import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasOnlineComponent } from './entrevistas-online.component';

describe('EntrevistasOnlineComponent', () => {
  let component: EntrevistasOnlineComponent;
  let fixture: ComponentFixture<EntrevistasOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistasOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrevistasOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
