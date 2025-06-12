import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioPlayer } from './audio';

describe('AudioPlayer', () => {
  let component: AudioPlayer;
  let fixture: ComponentFixture<AudioPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudioPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
