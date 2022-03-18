import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiairesDetailsComponent } from './beneficiairesDetails.component';

describe('BeneficiairesComponent', () => {
  let component: BeneficiairesDetailsComponent;
  let fixture: ComponentFixture<BeneficiairesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiairesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiairesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
