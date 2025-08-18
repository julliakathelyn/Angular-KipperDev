import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerjullia } from './footerjullia';

describe('Footerjullia', () => {
  let component: Footerjullia;
  let fixture: ComponentFixture<Footerjullia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerjullia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerjullia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
