import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFoGamesConteinerComponent } from './grid-fo-games-conteiner.component';

describe('GridFoGamesConteinerComponent', () => {
  let component: GridFoGamesConteinerComponent;
  let fixture: ComponentFixture<GridFoGamesConteinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFoGamesConteinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFoGamesConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
