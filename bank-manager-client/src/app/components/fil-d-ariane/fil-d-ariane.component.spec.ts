import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilDArianeComponent } from './fil-d-ariane.component';

describe('FilDArianeComponent', () => {
  let component: FilDArianeComponent;
  let fixture: ComponentFixture<FilDArianeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilDArianeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilDArianeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
