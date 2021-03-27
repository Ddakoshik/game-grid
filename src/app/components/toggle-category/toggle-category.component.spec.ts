import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCategoryComponent } from './toggle-category.component';

describe('ToggleCategoryComponent', () => {
  let component: ToggleCategoryComponent;
  let fixture: ComponentFixture<ToggleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
