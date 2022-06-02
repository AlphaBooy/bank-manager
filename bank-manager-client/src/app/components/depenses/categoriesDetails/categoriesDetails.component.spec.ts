import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailsComponent } from './categoriesDetails.component';

describe('CategoriesComponent', () => {
  let component: CategoriesDetailsComponent;
  let fixture: ComponentFixture<CategoriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
