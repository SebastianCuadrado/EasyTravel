import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesDialogoComponent } from './places-dialogo.component';

describe('PlacesDialogoComponent', () => {
  let component: PlacesDialogoComponent;
  let fixture: ComponentFixture<PlacesDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
