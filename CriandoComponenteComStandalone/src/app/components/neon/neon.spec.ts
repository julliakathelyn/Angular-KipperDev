import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Neon } from './neon';

describe('Neon', () => {
  let component: Neon;
  let fixture: ComponentFixture<Neon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Neon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Neon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
