import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caneta } from './caneta';

describe('Caneta', () => {
  let component: Caneta;
  let fixture: ComponentFixture<Caneta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caneta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caneta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
