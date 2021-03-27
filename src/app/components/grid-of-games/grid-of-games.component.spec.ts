import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfGamesComponent } from './grid-of-games.component';

describe('GridOfGamesComponent', () => {
  let component: GridOfGamesComponent;
  let fixture: ComponentFixture<GridOfGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOfGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOfGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
