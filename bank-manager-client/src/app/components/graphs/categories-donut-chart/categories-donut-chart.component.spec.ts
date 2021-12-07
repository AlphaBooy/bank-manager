import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDonutChartComponent } from './categories-donut-chart.component';

describe('CategoriesDonutChartComponent', () => {
  let component: CategoriesDonutChartComponent;
  let fixture: ComponentFixture<CategoriesDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDonutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
