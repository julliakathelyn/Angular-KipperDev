import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carne } from './carne';

describe('Carne', () => {
  let component: Carne;
  let fixture: ComponentFixture<Carne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
