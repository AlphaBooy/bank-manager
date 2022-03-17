import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrediteursComponent } from './crediteurs.component';

describe('CrediteursComponent', () => {
  let component: CrediteursComponent;
  let fixture: ComponentFixture<CrediteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrediteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrediteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
