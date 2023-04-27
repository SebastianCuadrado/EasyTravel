import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDialogoComponent } from './usuario-dialogo.component';

describe('UsuarioDialogoComponent', () => {
  let component: UsuarioDialogoComponent;
  let fixture: ComponentFixture<UsuarioDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
