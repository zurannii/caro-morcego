import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Morcegos } from './morcegos';

describe('Morcegos', () => {
  let component: Morcegos;
  let fixture: ComponentFixture<Morcegos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Morcegos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Morcegos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
