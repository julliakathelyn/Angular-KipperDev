import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gato } from './gato';

describe('Gato', () => {
  let component: Gato;
  let fixture: ComponentFixture<Gato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
