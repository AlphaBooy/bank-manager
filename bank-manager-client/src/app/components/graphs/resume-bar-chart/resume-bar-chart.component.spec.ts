import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBarChartComponent } from './resume-bar-chart.component';

describe('ResumeBarChartComponent', () => {
  let component: ResumeBarChartComponent;
  let fixture: ComponentFixture<ResumeBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
