import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaireDonutChartComponent } from './beneficiaire-donut-chart.component';

describe('BeneficiaireDonutChartComponent', () => {
  let component: BeneficiaireDonutChartComponent;
  let fixture: ComponentFixture<BeneficiaireDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaireDonutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaireDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
