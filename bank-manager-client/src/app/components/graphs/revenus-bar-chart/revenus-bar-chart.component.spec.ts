import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenusBarChartComponent } from './revenus-bar-chart.component';

describe('RevenusBarChartComponent', () => {
  let component: RevenusBarChartComponent;
  let fixture: ComponentFixture<RevenusBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenusBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenusBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
