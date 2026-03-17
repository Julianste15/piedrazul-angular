import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsSpecialty } from './doctors-specialty';

describe('DoctorsSpecialty', () => {
  let component: DoctorsSpecialty;
  let fixture: ComponentFixture<DoctorsSpecialty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsSpecialty],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsSpecialty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
