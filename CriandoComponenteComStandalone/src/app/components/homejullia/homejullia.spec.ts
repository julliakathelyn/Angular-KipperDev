import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homejullia } from './homejullia';

describe('Homejullia', () => {
  let component: Homejullia;
  let fixture: ComponentFixture<Homejullia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homejullia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homejullia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
