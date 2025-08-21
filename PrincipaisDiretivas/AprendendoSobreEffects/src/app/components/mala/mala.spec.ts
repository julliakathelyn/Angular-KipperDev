import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mala } from './mala';

describe('Mala', () => {
  let component: Mala;
  let fixture: ComponentFixture<Mala>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mala]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mala);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
