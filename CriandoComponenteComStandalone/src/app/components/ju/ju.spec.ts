import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ju } from './ju';

describe('Ju', () => {
  let component: Ju;
  let fixture: ComponentFixture<Ju>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ju]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ju);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
