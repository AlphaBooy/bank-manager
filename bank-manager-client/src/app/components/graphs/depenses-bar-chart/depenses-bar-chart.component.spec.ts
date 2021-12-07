import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepensesBarChartComponent } from './depenses-bar-chart.component';

describe('DepensesBarChartComponent', () => {
  let component: DepensesBarChartComponent;
  let fixture: ComponentFixture<DepensesBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepensesBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepensesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
