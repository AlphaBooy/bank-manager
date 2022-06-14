import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosDonutChartComponent } from './cryptos-donut-chart.component';

describe('CryptosDonutChartComponent', () => {
  let component: CryptosDonutChartComponent;
  let fixture: ComponentFixture<CryptosDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptosDonutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptosDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
