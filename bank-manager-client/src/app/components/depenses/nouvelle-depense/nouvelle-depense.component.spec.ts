import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleDepenseComponent } from './nouvelle-depense.component';

describe('NouvelleDepenseComponent', () => {
  let component: NouvelleDepenseComponent;
  let fixture: ComponentFixture<NouvelleDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleDepenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
